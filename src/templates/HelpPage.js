import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import HelpFooter from 'components/HelpFooter';
import PageBody from 'components/PageBody';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';

export const Page = (props) => {
  const { data } = props;

  const { page } = data;
  const { body } = page;
  const { canonical, metaDescription, slug, summary, title } = page.fields;

  const description = metaDescription || summary;

  return (
    <App>
      <SEO canonical={canonical} title={title} description={description} pathname={slug} />
      <PageWrapper>
        <PageHeader>{title}</PageHeader>
        <PageBody>
          <MDXRenderer>{body}</MDXRenderer>
          <HelpFooter />
        </PageBody>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    page: mdx(id: { eq: $id }) {
      fields {
        canonical
        # metaDescription
        slug
        # summary
        title
      }
      body
      mdxAST
      rawBody
      id
    }
  }
`;

export default Page;
