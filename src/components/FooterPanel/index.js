import { css } from '@emotion/core';
import { Heading, Paragraph } from '@octopusthink/nautilus';
import React from 'react';

import CTAButtons from 'components/CTAButtons';
import Panel from 'components/Panel';
import Spacer from 'components/Spacer';
import ArrowDown from 'src/images/arrow-down.svg';

const FooterPanel = () => {
  return (
    <Panel>
      <Spacer />

      <div
        css={css`
          padding: 12rem 0 6.4rem;
          text-align: center;
        `}
      >
        <img
          src={ArrowDown}
          alt=""
          css={css`
            margin-bottom: 6.4rem;
            margin-left: auto;
            margin-right: auto;
            max-width: 16rem;
          `}
        />
        <Heading level={2}>Get ready for calmer conversations.</Heading>
        <CTAButtons source="Footer" />
        <Paragraph
          small
          light
          css={css`
            font-size: 1.4rem;
          `}
        >
          30-day free trial & a no-questions-asked refund policy.
        </Paragraph>
      </div>

      <Spacer />
    </Panel>
  );
};

export default FooterPanel;
