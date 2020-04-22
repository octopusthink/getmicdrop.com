import { Button, TextField, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const NewsletterSignupForm = (props) => {
  const { className, emailRef } = props;
  const theme = useTheme();

  return (
    <form
      action="https://octopusthink.us4.list-manage.com/subscribe/post?u=dec5c2d889866b4c67a61ff55&amp;id=cd3b5cf599"
      method="post"
      name="mc-embedded-subscribe-form"
      className={className}
      noValidate
      css={css`
        align-items: end;
        display: grid;
        grid-gap: 0.8rem;

        @media screen and (min-width: 640px) {
          grid-template-columns: auto auto;
          grid-gap: 0.4rem;
        }

        label {
          color: ${theme.colors.text.inverse};
        }
      `}
    >
      <div>
        <TextField
          autocomplete="email"
          type="email"
          name="EMAIL"
          label="Email"
          ref={emailRef}
          placeholder="eg: name@yourdomain.com"
          css={css`
            margin-bottom: 0;
          `}
        />
      </div>

      <div
        css={css`
          position: absolute;
          left: -5000px;
        `}
        aria-hidden="true"
      >
        <input type="text" name="b_dec5c2d889866b4c67a61ff55_cd3b5cf599" tabIndex="-1" value="" />
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
