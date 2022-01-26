import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useEffect } from 'react';
import PageBody from 'components/PageBody';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SEO from 'components/SEO';
import App from 'templates/App';
import { trackEvent } from '../utils/eventTracking';

export const Page = (props) => {
  const { data } = props;

  const { page } = data;
  const { body } = page;
  const { canonical, isError, metaDescription, slug, summary, title } = page.fields;

  const description = metaDescription || summary;

  useEffect(() => {
    // Redirect away from the downloads CDN if, for some reason, someone
    // visits it directly.
    if (
      global.location &&
      global.location.hostname &&
      global.location.hostname === 'downloads.getmicdrop.com'
    ) {
      global.location.hostname = 'getmicdrop.com';
      return;
    }

    if (isError === 404 && global.plausible) {
      trackEvent('404', { path: global.document.location.pathname });
    }
  }, [isError, slug]);

  return (
    <App>
      <SEO canonical={canonical} title={title} description={description} pathname={slug} />
      <PageWrapper>
        <PageHeader>{title}</PageHeader>
        <PageBody>
          <MDXRenderer>{body}</MDXRenderer>
        </PageBody>
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    page: mdx(id: { eq: $id }) {
      fields {
        canonical
        isError
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
