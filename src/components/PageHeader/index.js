import { css } from '@emotion/core';
import { PageTitle, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const PageHeader = (props) => {
  const { children, homepage } = props;
  const theme = useTheme();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleHomepage
          }
        }
      }
    `,
  );
  let siteTitle = site.siteMetadata.title;
  if (homepage) {
    siteTitle = site.siteMetadata.titleHomepage;
  }

  return (
    <header
      css={css`
        border-bottom: 4px solid ${theme.colors.neutral.black};
        margin-bottom: 4.8rem;
      `}
    >
      <PageTitle
        css={css`
          margin-bottom: 2.4rem;
          letter-spacing: -0.03em;
        `}
      >
        <span>{siteTitle}</span>
        <span
          css={css`
            display: block;
          `}
        >
          {children}
        </span>
      </PageTitle>
    </header>
  );
};

export default PageHeader;
