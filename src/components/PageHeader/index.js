import { css } from '@emotion/core';
import { PageTitle, VisuallyHidden } from '@octopusthink/nautilus';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Arrow from 'src/images/arrow.svg';

const PageHeader = (props) => {
  const { children, homepage } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <header
      css={css`
        align-items: center;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
        padding-bottom: 0;
      `}
    >
      {homepage && (
        <VisuallyHidden>
          <PageTitle>{site.siteMetadata.title}</PageTitle>
        </VisuallyHidden>
      )}

      {!homepage && (
        <PageTitle
          css={css`
            margin-bottom: 0;
            letter-spacing: -0.04em;
            font-size: 4.8rem;
            text-align: center;
            position: relative;
          `}
        >
          <img
            css={css`
              width: 5.6rem;
              height: 5.6rem;
              position: absolute;
              transform: rotate(-45deg);
              left: -6.4rem;
              top: -0.2rem;
            `}
            src={Arrow}
            alt=""
          />
          {children}
        </PageTitle>
      )}
    </header>
  );
};

export default PageHeader;
