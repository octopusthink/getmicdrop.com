import React from 'react';

const PageWrapper = (props) => {
  const { children, className } = props;
  return <article className={className}>{children}</article>;
};

export default PageWrapper;
