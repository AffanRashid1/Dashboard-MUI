import React from "react";
import SideBar from "../Drawer/SideBar";

const Layout = ({ children }) => {
  return <SideBar>{children}</SideBar>;
};

export default Layout;
