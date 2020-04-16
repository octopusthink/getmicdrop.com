import { Link, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const TestimonialLink = ({ company, name, url }) => {
  const theme = useTheme();

  if (!url) {
    return null;
  }

  return (
    <Link
      as="a"
      href={url}
      css={css`
        color: ${theme.colors.text.inverse};
        box-shadow: 0 2px ${theme.colors.neutral.grey200};

        &:hover {
          box-shadow: none;
          color: ${theme.colors.neutral.white};
        }
      `}
    >
      {company || name}
    </Link>
  );
};

const Testimonial = (props) => {
  const { name, children, company, title, url } = props;
  const theme = useTheme();

  let attribution;
  // eslint-disable-next-line react/jsx-props-no-spreading
  const nameLink = !company && url ? <TestimonialLink {...props} /> : name;
  // eslint-disable-next-line react/jsx-props-no-spreading
  const companyLink = company && url && <TestimonialLink {...props} />;

  if (company && url) {
    attribution = (
      <React.Fragment>
        {title && (
          <React.Fragment>
            {title}
            {', '}
          </React.Fragment>
        )}
        {companyLink}
      </React.Fragment>
    );
  } else if (title && company) {
    attribution = `${title}, ${company}`;
  } else if (title) {
    attribution = title;
  } else if (company) {
    attribution = company;
  }

  return (
    <blockquote
      css={css`
        font-size: 1.2em;
        position: relative;
        margin: 0 0 0 1.6rem;

        @media screen and (min-width: 640px) {
          margin-left: 2.4rem;
        }

        &::before {
          color: ${theme.colors.text.inverseDark};
          content: '“';
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-size: 12rem;
          position: absolute;
          top: -2.8rem;
          left: -5.6rem;
          display: block;
          opacity: 0.25;
        }
      `}
    >
      {children}

      <cite
        css={css`
          ${metadata.small(theme)};
          color: ${theme.colors.text.inverseDark};
          font-style: normal;
        `}
      >
        {nameLink}
        {attribution && (
          <React.Fragment>
            {' · '}
            {attribution}{' '}
          </React.Fragment>
        )}
      </cite>
    </blockquote>
  );
};

export default Testimonial;
