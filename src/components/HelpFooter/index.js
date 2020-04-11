import { css } from '@emotion/core';
import { Button, Link, Paragraph, TextField, useTheme } from '@octopusthink/nautilus';
import React from 'react';

import Argument from 'components/Argument';

const HelpFooter = () => {
  const theme = useTheme();

  return (
    <footer
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${theme.site.maxContentWidth};
        text-align: center;

        input {
          margin-bottom: 1.6rem;
        }
      `}
    >
      <Argument title="This doesn't answer my question!" noWrapper>
        <Paragraph inverse>
          Send a message to{' '}
          <Link as="a" href="mailto:help@getmicdrop.com">
            help@getmicdrop.com
          </Link>{' '}
          or fill in the form and we&rsquo;ll get back to you as soon as we can.
        </Paragraph>

        <TextField label="Name" />
        <TextField label="Email" />
        <TextField
          label="What's going on?"
          hint="Be as detailed as possible! If you can include which version of Mic Drop you're using..."
          multiline
        />
      </Argument>

      <Button
        css={css`
          margin: 0.8rem 0 0;
          &::after {
            display: none;
          }
        `}
        navigation
        minimal
        to="/help"
        noMargin
      >
        ← Back to help
      </Button>
    </footer>
  );
};

export default HelpFooter;
