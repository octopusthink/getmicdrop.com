import { Icon, Link, VisuallyHidden, interfaceUI, useTheme } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';

const ListLink = (props) => {
  const { a, children, iconName, link, onClick } = props;

  const [isCurrent, setIsCurrent] = useState();
  const theme = useTheme();

  return (
    <li
      css={css`
        ${!iconName &&
          css`
            ${interfaceUI.large(theme)};
            color: ${theme.colors.text.inverse};
            display: flex;
            align-items: baseline;

            @media screen and (min-width: 641px) {
              &:not(:last-of-type):after {
                display: inline-block;
                content: '·';
                position: relative;
                padding-left: 0.4rem;
                padding-right: 0.4rem;
              }
            }
          `}
      `}
    >
      <Link
        unstyled
        as={a ? 'a' : undefined}
        href={a ? link : undefined}
        to={a ? undefined : link}
        css={css`
          color: ${theme.colors.text.inverse};
          display: block;
          padding: 0.4rem 0.8rem;
          margin-bottom: 0.8rem;
          text-decoration: none;
          z-index: 2;
          position: relative;

          &:hover {
            color: ${theme.colors.accent.primaryLight};
            box-shadow: none;

            .icon {
              &::before {
                opacity: 1;
                transform: scale(1);
              }

              svg {
                stroke: ${theme.colors.state.hoverText};
                z-index: 2;
                position: relative;
              }
            }
          }

          &:focus {
            outline: 0.2rem solid ${theme.colors.state.focusOutline};

            span::after {
              border-color: transparent;
            }

            ${iconName &&
              css`
                outline: none;

                .icon::before {
                    opacity: 1;
                    transform: scale(1.1);
                    background: transparent;
                    border: 0.2rem solid ${theme.colors.state.focusOutline};
              `}
          }

          ${isCurrent &&
            css`
              color: ${theme.colors.text.inverseDark};
            `}
        `}
        getProps={(linkProps) => {
          const { isCurrent: isCurrentRouterLink } = linkProps;
          if (isCurrentRouterLink !== isCurrent) {
            if (isCurrentRouterLink) {
              setIsCurrent(true);
            } else {
              setIsCurrent(false);
            }
          }
        }}
        onClick={(event) => {
          if (typeof onClick === 'function') {
            onClick(event);
          }

          if (isCurrent) {
            event.currentTarget.blur();
          }
        }}
      >
        <span
          css={css`
            position: relative;
          `}
        >
          {iconName && (
            <Icon
              className="icon"
              strokeColor={theme.colors.text.inverse}
              name={iconName}
              css={css`
                width: 2.4rem;
                height: 2.4rem;
                position: relative;
                opacity: 1;

                ::before {
                  transform: scale(0.5);
                  opacity: 0;
                  content: '';
                  position: absolute;
                  top: -8px;
                  right: -8px;
                  bottom: -8px;
                  left: -8px;
                  background: ${theme.colors.accent.primaryLight};
                  border-radius: 100%;
                  z-index: 1;
                  transition: all 200ms ease-out;
                }

                svg {
                  z-index: 2;
                  position: relative;
                }
              `}
            />
          )}
          <VisuallyHidden>{children}</VisuallyHidden>
          {!iconName && children}
        </span>
      </Link>
    </li>
  );
};

export default ListLink;
