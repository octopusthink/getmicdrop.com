import { Heading, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const Argument = (props) => {
  const theme = useTheme();
  const { children, end, title, top } = props;

  return (
    <div
      css={css`
        position: relative;
        z-index: 2;

        ${!end &&
          css`
            grid-column: 1;
          `}

        ${end &&
          css`
            @media screen and (min-width: 640px) {
              grid-column: 2;
            }

            @media screen and (min-width: 1400px) {
              grid-column: 3;
            }
          `}
      `}
    >
      <Heading
        inverse
        css={css`
          display: flex;
          align-items: center;
          position: relative;

          &::before {
            display: inline-block;
            content: '';
            width: 4rem;
            height: 4rem;
            background: ${theme.colors.neutral.black};
            border-radius: 50%;
            margin-right: 0.8rem;

            ${top &&
              css`
                background: ${theme.colors.neutral.white};
              `}
          }

          &::after {
            display: inline-block;
            content: '';
            width: 1.6rem;
            height: 1.6rem;
            background: ${theme.colors.accent.primary};
            border-radius: 50%;
            position: absolute;
            top: 1.8rem;
            left: 1.2rem;
          }
        `}
      >
        <span
          css={css`
            background: ${theme.colors.accent.primary};
            display: inline-block;
            padding: 0.8rem;
          `}
        >
          {title}
        </span>
      </Heading>
      <div
        css={css`
          background: ${theme.colors.neutral.black};
          padding: 2.4rem;
        `}
      >
        <Paragraph
          inverse
          css={css`
            margin-bottom: 0;
          `}
        >
          {children}
        </Paragraph>
      </div>
    </div>
  );
};

export default Argument;
