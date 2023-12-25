import React from "react";
import MiniDrawer from "../Drawer/MiniDrawer";

const Layout = ({ children }) => {
  return (
    <>
      <MiniDrawer>{children}</MiniDrawer>
    </>
  );
};

export default Layout;
