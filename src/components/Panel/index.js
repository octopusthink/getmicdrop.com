import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const Panel = (props) => {
  const theme = useTheme();
  const {
    background,
    backgroundStatic,
    children,
    className,
    dark,
    fullwidth,
    gridMobile,
    gridTablet,
    gridDesktop,
    gridWide,
    negativeMargins,
  } = props;

  let hasGrid = false;
  if (gridMobile || gridTablet || gridDesktop || gridWide) {
    hasGrid = true;
  }

  const panelBackground = dark ? theme.colors.neutral.black : 'transparent';

  return (
    <section
      className={className}
      css={css`
        background: ${panelBackground};
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow-x: hidden;

        ${negativeMargins &&
          css`
            margin-top: -16rem;
            margin-bottom: -24rem;
          `}
      `}
    >
      {background && (
        <Image
          css={css`
            object-fit: cover;
            width: 100%;
            height: 100vh;
          `}
          src={background}
          width="100%"
          alt=""
        />
      )}
      {backgroundStatic && (
        <img
          css={css`
            object-fit: cover;
            width: 100%;
            height: 100vh;
          `}
          loading="lazy"
          src={backgroundStatic}
          alt=""
        />
      )}
      <div
        css={css`
          ${(background || backgroundStatic) &&
            css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            `}
          margin: 0 auto;
          padding-top: 4rem;
          padding-bottom: 4rem;
          padding-left: ${theme.site.mobilePadding};
          padding-right: ${theme.site.mobilePadding};
          width: 100%;

          @media screen and (min-width: 780px) {
            padding-top: ${theme.site.desktopPadding};
            padding-bottom: ${theme.site.desktopPadding};
            padding-left: ${theme.site.tabletPadding};
            padding-right: ${theme.site.tabletPadding};
          }
          @media screen and (min-width: 1024px) {
            max-width: ${theme.site.maxSiteWidth};
            padding-left: ${theme.site.desktopPadding};
            padding-right: ${theme.site.desktopPadding};
          }
        `}
      >
        <div
          css={css`
            ${!fullwidth &&
              css`
                margin: auto;
                max-width: ${theme.site.maxSiteWidth};
              `}

            ${!hasGrid &&
              !fullwidth &&
              css`
                margin: auto;
                max-width: ${theme.site.maxContentWidth};
              `}

            @media screen and (max-width: 779px) {
              grid-gap: ${theme.site.mobilePadding};
              ${gridMobile &&
                css`
                  display: grid;
                  grid-template-columns: ${gridMobile};
                  align-items: center;
                  height: 100%;
                `}
            }

            @media screen and (min-width: 780px) {
              grid-gap: ${theme.site.tabletPadding};
              ${gridTablet &&
                css`
                  display: grid;
                  grid-template-columns: ${gridTablet};
                  align-items: center;
                  height: 100%;
                `}
            }

            @media screen and (min-width: 1024px) {
              grid-gap: ${theme.site.desktopPadding};
              ${gridDesktop &&
                css`
                  display: grid;
                  grid-template-columns: ${gridDesktop};
                  align-items: center;
                  height: 100%;
                `}
            }

            @media screen and (min-width: 1400px) {
              ${gridWide &&
                css`
                  display: grid;
                  grid-template-columns: ${gridWide};
                  align-items: center;
                  height: 100%;
                `}
            }
          `}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Panel;
