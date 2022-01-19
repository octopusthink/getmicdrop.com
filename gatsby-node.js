const fs = require('fs');
const path = require('path');

const { kebabCase } = require('lodash');
const moment = require('moment');
const { singular } = require('pluralize');

const siteConfig = require('./data/SiteConfig');

const projectPath = path.resolve(fs.realpathSync(process.cwd()), '.');
const srcPath = path.resolve(fs.realpathSync(process.cwd()), 'src');

const { useDatesInSlugs } = siteConfig;

// Create pages of any other type.
const makePages = ({ actions, pages }) => {
  const { createPage } = actions;

  if (pages) {
    pages.edges.forEach((edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/${edge.node.fields.component}.js`),
        context: {
          id: edge.node.id,
          slug: edge.node.fields.slug,
        },
      });
    });
  }
};

const onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type)) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    // If this node contains date info, load the date and set it in the fields.
    const dateMatch = parsedFilePath.name.match(/^(\d{4}-\d{2}-\d{2})-(.*)/);

    let date;
    if (dateMatch) {
      date = moment.utc(dateMatch[1]);

      if (!date || !date.isValid) {
        // eslint-disable-next-line no-console
        console.warn(`WARNING: Invalid date for ${parsedFilePath.name}`);
      }

      createNodeField({
        node,
        name: 'date',
        value: date.toISOString(),
      });

      createNodeField({
        node,
        name: 'timestamp',
        value: parseInt(date.format('X'), 10),
      });

      createNodeField({
        node,
        name: 'updated',
        value: node.frontmatter.updated ? node.frontmatter.updated : null,
      });
    }

    const rootFolder = parsedFilePath.dir.split('/')[0];

    // "Page" is the default, fallback component if nothing else can be found.
    let component = 'Page';
    if (node.frontmatter && node.frontmatter.component) {
      component = node.frontmatter.component;
    } else if (rootFolder) {
      try {
        fs.statSync(`src/templates/${rootFolder}.js`);
      } catch (error) {
        // This means we don't have a template file that matches the name
        // of the component's root folder, which is fine. We'll use the `Page`
        // component default defined above.
        if (error.code !== 'ENOENT') {
          throw error;
        }
      }
      component = singular(kebabCase(rootFolder));
      component = `${component.charAt(0).toUpperCase()}${component.slice(1)}`;
    }

    createNodeField({
      node,
      name: 'component',
      value: component,
    });

    // We try to create slugs automatically to reduce the amount of frontmatter
    // authors need to write. Frontmatter support, however, still exists for
    // overrides, if the user desires it.
    //
    // For pages, we use:
    //
    //   1. The page's path + `slug` field in frontmatter. If the `slug` field
    //      were set to `"hello"` in `pages/foo.md` the slug would be `/hello`.
    //      If it were in `pages/something/foo.md` the slug would be
    //      `/something/hello`.
    //   2. The page's path + filename; eg. `pages/about.md` -> `/about`,
    //      `pages/projects/nautilus.md` -> `/projects/nautilus`.
    const datePrefix = date && useDatesInSlugs ? `${dateMatch[1]}-` : '';
    const fileName = date ? dateMatch[2] : parsedFilePath.name;

    if (parsedFilePath.dir.match(/^pages/)) {
      const pathWithoutPagesFolder = parsedFilePath.dir.replace(/^pages\/?/, '');

      if (node.frontmatter && node.frontmatter.slug) {
        slug = `/${pathWithoutPagesFolder}/${node.frontmatter.slug}`;
      } else {
        slug = `/${pathWithoutPagesFolder}/${fileName}`;
      }
    } else if (node.frontmatter && node.frontmatter.slug) {
      slug = `/${parsedFilePath.dir}/${datePrefix}${node.frontmatter.slug}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${datePrefix}${fileName}`;
    } else {
      slug = `/${parsedFilePath.dir}`;
    }

    // Create the slug, changing `/index` to `/` and removing any double
    // slashes in slugs.
    createNodeField({
      node,
      name: 'slug',
      value: slug.replace(/\/index$/, '/').replace(/\/{2,}/g, '/'),
    });

    // Create fields for every other frontmatter prop; this makes it easier to
    // query for fields instead of needing to know what's in `node.fields` and
    // what's in `node.frontmatter`.
    Object.keys(node.frontmatter)
      .filter((key) => {
        return ['component', 'date', 'slug'].indexOf(key) === -1;
      })
      .forEach((key) => {
        createNodeField({
          node,
          name: key,
          value: node.frontmatter[key],
        });
      });
  }
};

const createPages = async ({ actions, graphql }) => {
  const markdownQueryResult = await graphql(`
    query {
      pages: allMdx(filter: { fileAbsolutePath: { regex: "//content/(?!blog|portfolio).+?/" } }) {
        edges {
          node {
            id
            fields {
              component
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    // eslint-disable-next-line no-console
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const { pages } = markdownQueryResult.data;

  makePages({ actions, pages });
};

const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
      // path: 'empty',
    },
    resolve: {
      extensions: ['.mjs', '.jsx', '.js', '.json'],
      modules: [srcPath, projectPath, 'node_modules'],
    },
  });
};

module.exports = { createPages, onCreateNode, onCreateWebpackConfig };
