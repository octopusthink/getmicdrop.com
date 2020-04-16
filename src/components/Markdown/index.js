import MarkdownRenderer from 'markdown-to-jsx';
import React from 'react';

import { components as defaultComponents } from 'components/GhostShipMDX';

const Markdown = (props) => {
  const { children, components } = props;

  const allComponents = { ...defaultComponents, ...components };

  const overrides = Object.keys(allComponents).reduce((acc, tag) => {
    const ComponentToUse = allComponents[tag];

    return {
      ...acc,
      [tag]: {
        component: ComponentToUse,
      },
    };
  }, {});

  return <MarkdownRenderer options={{ forceBlock: true, overrides }}>{children}</MarkdownRenderer>;
};

Markdown.defaultProps = {
  components: {},
};

export default Markdown;
