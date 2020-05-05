import { Heading, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const Argument = (props) => {
  const theme = useTheme();
  const { bottom, children, end, start, title, top } = props;

  return (
    <div
      css={css`
        position: relative;
        text-align: left;
        z-index: 2;

        ${(top || bottom) &&
          css`
            max-width: calc(48rem + 2 * 2.4rem);
            position: absolute;
            left: ${theme.site.mobilePadding};
            right: ${theme.site.mobilePadding};
          `}

        ${top &&
          css`
            top: -12rem;
          `}

        ${bottom &&
          css`
            bottom: -8rem;
          `}

        ${start &&
          css`
            @media screen and (min-width: 512px) {
              right: auto;
            }

            @media screen and (min-width: 780px) {
              left: ${theme.site.tabletPadding};
            }

            @media screen and (min-width: 1024px) {
              left: ${theme.site.desktopPadding};
            }

            @media screen and (min-width: 1120px) {
              left: 0;
            }
          `}

        ${end &&
          css`
            @media screen and (min-width: 512px) {
              left: auto;
            }

            @media screen and (min-width: 780px) {
              right: ${theme.site.tabletPadding};
            }

            @media screen and (min-width: 1024px) {
              right: ${theme.site.desktopPadding};
            }

            @media screen and (min-width: 1120px) {
              right: 0;
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
            background: ${theme.colors.neutral.white};
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
                background: ${theme.colors.neutral.black};
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
        `}
      >
        <Paragraph noMargin inverse>
          {children}
        </Paragraph>
      </div>
    </div>
  );
};

export default Argument;
