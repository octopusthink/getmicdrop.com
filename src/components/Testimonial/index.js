import { Link, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Image from 'components/Image';

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
  const { name, children, company, photo, title, url } = props;
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
          margin-top: 4.8rem;
          margin-bottom: 4.8rem;
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
          display: flex;
          align-items: center;
        `}
      >
        {photo && (
          <Image
            src={photo}
            alt=""
            css={css`
              filter: grayscale(100%);
              margin-right: 0.8rem;
              width: 4.8rem;
            `}
          />
        )}
        {nameLink}
        {attribution && (
          <span
            css={css`
              margin-left: 0.4rem;

              &::before {
                display: inline-block;
                content: '·';
                margin-right: 0.4rem;
              }
            `}
          >
            {attribution}
          </span>
        )}
      </cite>
    </blockquote>
  );
};

export default Testimonial;
