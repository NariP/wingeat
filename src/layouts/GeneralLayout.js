import React from 'react';

const GeneralLayout = ({ children }) => {
  return (
    <div>
      <header>header</header>
      <div>{children}</div>
    </div>
  );
};

export default GeneralLayout;
