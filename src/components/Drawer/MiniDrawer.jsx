import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  Drawer,
  DrawerHeader,
  AppBar,
  closedMixin,
  openedMixin,
} from "./DrawerStyles";
import DrawerList from "./DrawerList";
import { Avatar } from "@mui/material";

export default function MiniDrawer({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Avatar />
          <Typography variant="h5">Affan</Typography>
        </DrawerHeader>
        <Divider />
        <DrawerList />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
