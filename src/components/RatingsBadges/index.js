import { Paragraph } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import ProductHuntBadge from 'components/ProductHuntBadge';
import MacRumorsBadge from 'components/MacRumorsBadge';
import StarRatingSVG from 'src/images/star-rating.svg';

const RatingsBadges = () => {
  return (
    <div
      css={css`
        grid-column: 1 / -1;
        margin-top: 3.2rem;
        position: relative;

        @media screen and (min-width: 780px) {
          margin-top: -6.4rem;
        }

        @media screen and (min-width: 960px) {
          margin-top: -12.8rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <img
          src={StarRatingSVG}
          alt=""
          css={css`
            margin-bottom: 0.8rem;
          `}
        />
        <Paragraph small light>
          4.4 star rating the on Mac App Store
        </Paragraph>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.6rem;
          flex-direction: column;

          @media screen and (min-width: 780px) {
            flex-direction: row;
          }
        `}
      >
        <ProductHuntBadge />
        <MacRumorsBadge />
      </div>
    </div>
  );
};

export default RatingsBadges;
