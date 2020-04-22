import { css } from '@emotion/core';
import { Heading } from '@octopusthink/nautilus';
import React from 'react';

import CTAButtons from 'components/CTAButtons';
import Image from 'components/Image';
import Panel from 'components/Panel';
import Spacer from 'components/Spacer';

const FooterPanel = () => {
  return (
    <Panel>
      <Spacer />

      <div
        css={css`
          padding: 12rem 6.4rem 6.4rem;
          text-align: center;
        `}
      >
        <Image
          src="images/arrow-down.svg"
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
      </div>

      <Spacer />
    </Panel>
  );
};

export default FooterPanel;
