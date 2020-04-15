import { Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const CookieNotice = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background: ${theme.colors.neutral.black};
        padding: 2.4rem;
        position: fixed;
        text-align: left;
        z-index: 20;

        @media screen and (max-width: 639px) {
          border-top: 2px solid ${theme.colors.neutral.white};
          left: 0;
          bottom: 0;
          right: 0;
        }

        @media screen and (min-width: 640px) {
          border: 2px solid ${theme.colors.neutral.white};
          left: 4.8rem;
          top: 4.8rem;
          max-width: 320px;
        }

        a {
          box-shadow: 0 1px ${theme.colors.neutral.grey200};
          color: ${theme.colors.neutral.white};
          margin-right: 4px;

          &:hover {
            color: ${theme.colors.neutral.white};
          }
        }
      `}
    >
      <Paragraph inverse small>
        Hi there! 👋 Are you cool with letting our analytics program know you've visited? We promise
        to protect your privacy and we'll never sell your information to advertisers.
      </Paragraph>

      <Paragraph
        noMargin
        inverse
        small
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link>Yes, that's fine.</Link>
        <Link>No thank you.</Link>
      </Paragraph>
    </div>
  );
};

export default CookieNotice;
