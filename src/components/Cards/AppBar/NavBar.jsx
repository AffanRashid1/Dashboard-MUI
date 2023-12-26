import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { AppBar } from "../../Drawer/DrawerStyles";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ open, setOpen }) => {
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setOpen(!open);
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
