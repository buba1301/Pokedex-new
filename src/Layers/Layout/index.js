import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
