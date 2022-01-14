import { css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import {
  Emphasis,
  Heading,
  List,
  Link,
  PageTitle,
  Paragraph,
  Strong,
} from '@octopusthink/nautilus';
import React, { Children } from 'react';

import Image from 'components/Image';
import Panel from 'components/Panel';
import config from 'data/SiteConfig';

export const components = {
  /* eslint-disable react/jsx-props-no-spreading */
  h1: (props) => <PageTitle {...props} />,
  h2: (props) => <Heading {...props} level={2} />,
  h3: (props) => <Heading {...props} level={3} />,
  h4: (props) => <Heading {...props} level={4} />,
  p: (props) => <Paragraph {...props} />,
  ul: (props) => <List {...props} />,
  ol: (props) => <List {...props} ordered />,
  li: (props) => <List.Item {...props} />,
  hr: () => {
    // eslint-disable-next-line no-console
    console.log('<hr /> tag not currently implemented.');
    return null;
  },
  a: (originalProps) => {
    const { href } = originalProps;
    const props = { ...originalProps };

    if (href.startsWith('/') && !href.startsWith('//')) {
      props.to = href;
      delete props.href;
    } else {
      props.as = 'a';
      if (
        !href.startsWith('mailto:') &&
        !href.startsWith(config.siteUrl) &&
        !href.startsWith('#')
      ) {
        props.external = true;
      }
    }

    return (
      <Link
        css={css`
          ${href.startsWith('#') &&
            css`
              &,
              &:hover {
                box-shadow: none;
                padding-left: 2px;
              }
            `}
        `}
        {...props}
      />
    );
  },
  img: (props) => <Image {...props} />,
  div: (props) => <div {...props} />,
  strong: (props) => <Strong {...props} />,
  emphasis: (props) => <Emphasis {...props} />,
  wrapper: ({ children }) => {
    const updatedChildren = Children.map(children, (child) => {
      if (child.props.className === 'footnotes') {
        // Since we only have one element that will ever match this
        // the key doesn't matter, but react will yell without a key.
        return <Panel key={1} {...child.props} />;
      }
      return child;
    });
    return <React.Fragment>{updatedChildren}</React.Fragment>;
  },
  /* eslint-enable react/jsx-props-no-spreading */
};

const GhostShipMDX = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default GhostShipMDX;
