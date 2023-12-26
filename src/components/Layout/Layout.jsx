import React, { useState } from "react";
import MiniDrawer from "../Drawer/MiniDrawer";
import NavBar from "../Cards/AppBar/NavBar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar open={open} setOpen={setOpen} />
      <MiniDrawer open={open} setOpen={setOpen}>
        {children}
      </MiniDrawer>
    </>
  );
};

export default Layout;
