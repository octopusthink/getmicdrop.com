import { css } from '@emotion/core';
import { PageTitle, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Logo from 'src/images/logo.svg';

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
        align-items: flex-end;
        border-bottom: 4px solid ${theme.colors.neutral.black};
        margin-bottom: 4.8rem;
        padding-bottom: 2.4rem;
        display: flex;
      `}
    >
      <img
        css={css`
          width: 200px;
          margin: 0 -4rem -0.8rem -2.4rem;
        `}
        src={Logo}
        alt="A person making the shush face"
      />
      <PageTitle
        css={css`
          margin-bottom: 0;
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
