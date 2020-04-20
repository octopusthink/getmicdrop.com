import { Heading, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const Argument = (props) => {
  const theme = useTheme();
  const { children, end, title, top, noWrapper } = props;

  return (
    <div
      css={css`
        position: relative;
        text-align: left;
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
          color: ${theme.colors.neutral.white};
          display: flex;
          align-items: center;
          position: relative;

          &::before {
            background: ${theme.colors.neutral.black};
            border-radius: 50%;
            content: '';
            display: inline-block;
            flex-grow: 0;
            flex-shrink: 0;
            height: 4rem;
            margin-right: 0.8rem;
            width: 4rem;

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
            left: 1.2rem;
          }
        `}
      >
        <span
          css={css`
            background: ${theme.colors.accent.primary};
            display: inline-block;
            padding: 0.8rem 1.6rem;
          `}
        >
          {title}
        </span>
      </Heading>
      <div
        css={css`
          background: ${theme.colors.neutral.black};
          padding: 2.4rem;

          a {
            border-color: ${theme.colors.neutral.grey200};
            color: ${theme.colors.neutral.grey400};

            &:hover {
              color: ${theme.colors.neutral.white};
            }
          }

          label {
            color: ${theme.colors.neutral.grey400};
          }
        `}
      >
        {noWrapper && children}

        {!noWrapper && (
          <Paragraph inverse noMargin>
            {children}
          </Paragraph>
        )}
      </div>
    </div>
  );
};

export default Argument;
