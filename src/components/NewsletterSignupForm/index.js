import { Button, TextField, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/react';

const NewsletterSignupForm = (props) => {
  const { className, emailRef } = props;
  const theme = useTheme();

  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/octopusthink"
      method="post"
      className={className}
      noValidate
      css={css`
        display: flex;
        flex-direction: column;
        grid-gap: 0.4rem;
        align-items: center;

        @media screen and (min-width: 460px) {
          align-items: flex-end;
          flex-direction: row;
        }
      `}
    >
      <div
        css={css`
          width: 100%;

          label {
            color: ${theme.colors.neutral.grey200};
          }
        `}
      >
        <TextField
          autocomplete="email"
          type="email"
          name="email"
          label="Email"
          ref={emailRef}
          placeholder="eg: name@yourdomain.com"
          css={css`
            margin-bottom: 0;
          `}
        />
        <input type="hidden" value="1" name="embed" />
        <input type="hidden" name="tag" value="from-getmicdrop.com octopus-thoughts" />
      </div>
      <Button
        css={css`
          margin-bottom: 0;

          @media screen and (max-width: 639px) {
            max-width: max-content;
          }
        `}
        primary
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterSignupForm;
