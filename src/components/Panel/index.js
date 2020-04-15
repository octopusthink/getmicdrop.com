import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

const Panel = (props) => {
  const theme = useTheme();
  const {
    background,
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
            height: 70vh;
            filter: grayscale(100%) contrast(80%) brightness(95%);
          `}
          src={background}
          alt=""
        />
      )}
      <div
        css={css`
          ${background &&
            css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            `}
          margin: 0 auto;
          padding-top: 8rem;
          padding-bottom: 8rem;
          padding-left: ${theme.site.mobilePadding};
          padding-right: ${theme.site.mobilePadding};
          width: 100%;

          @media screen and (min-width: 640px) {
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
            
            @media screen and (max-width: 639px) {
              grid-gap: ${theme.site.mobilePadding};
              ${gridMobile &&
                css`
                  display: grid;
                  grid-template-columns: ${gridMobile};
                  align-items: center;
                `}
            }

            @media screen and (min-width: 640px) {
              grid-gap: ${theme.site.tabletPadding};
              ${gridTablet &&
                css`
                  display: grid;
                  grid-template-columns: ${gridTablet};
                  align-items: center;
                `}
            }

            @media screen and (min-width: 1024px) {
              grid-gap: ${theme.site.desktopPadding};
              ${gridDesktop &&
                css`
                  display: grid;
                  grid-template-columns: ${gridDesktop};
                  align-items: center;
                `}
            }

            @media screen and (min-width: 1400px) {
              ${gridWide &&
                css`
                  display: grid;
                  grid-template-columns: ${gridWide};
                  align-items: center;
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
