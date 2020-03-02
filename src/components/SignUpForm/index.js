import { Button, TextField } from '@octopusthink/nautilus';
import EmailValidator from 'email-validator';
import React, { useEffect, useRef, useState } from 'react';

const SignUpForm = () => {
  const [emailError, setEmailError] = useState(null);
  const [hasBlurredEmail, setHasBlurredEmail] = useState(false);
  const [formEnabled, setFormEnabled] = useState(false);
  const emailRef = useRef();

  const onEmailChange = () => {
    if (!emailRef.current || !emailRef.current.value.length) {
      setEmailError('Please enter your email address.');
      setFormEnabled(false);
      return;
    }

    if (hasBlurredEmail && !EmailValidator.validate(emailRef.current.value)) {
      setEmailError('Please enter a valid email address.');
      setFormEnabled(false);
      return;
    }

    if (!formEnabled) {
      setFormEnabled(true);
    }

    if (emailError) {
      setEmailError(null);
    }
  };

  const onEmailBlur = () => {
    if (!hasBlurredEmail) {
      setHasBlurredEmail(true);
    }
    onEmailChange();
  };

  useEffect(() => {
    if (hasBlurredEmail) {
      onEmailChange();
    }
  });

  const onSubmit = (event) => {
    onEmailChange();

    if (!emailRef.current || !emailRef.current.value.length) {
      event.preventDefault();
    }
  };

  return (
    <form
      action="https://octopusthink.us4.list-manage.com/subscribe/post?u=dec5c2d889866b4c67a61ff55&amp;id=cd3b5cf599"
      method="post"
      noValidate
      onSubmit={onSubmit}
    >
      <input type="hidden" name="group[20489][2]" value="1" />
      <TextField
        label="Email"
        name="MERGE0"
        type="email"
        ref={emailRef}
        error={emailError}
        onChange={onEmailChange}
        onBlur={onEmailBlur}
      />

      <Button disabled={!formEnabled} primary type="submit">
        Send me an invite!
      </Button>
    </form>
  );
};

export default SignUpForm;
