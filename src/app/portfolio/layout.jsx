import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h2 className="font-bold text-6xl mb-4">Our Works</h2>
      {children}
    </div>
  );
};

export default Layout;
