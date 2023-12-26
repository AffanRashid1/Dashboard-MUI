import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Drawer, DrawerHeader } from "./DrawerStyles";
import DrawerList from "./DrawerList";
import { Avatar } from "@mui/material";

export default function MiniDrawer({ children, open }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "secondary.main",
          },
        }}
      >
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
