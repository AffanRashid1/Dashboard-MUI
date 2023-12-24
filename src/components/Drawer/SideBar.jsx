import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Main, AppBar, DrawerHeader, DrawerStyle } from "./SideBarStyles";
import DrawerList from "./DrawerList";
import { Avatar, Grid, Stack } from "@mui/material";
import BalanceCard from "../Cards/BalanceCard/BalanceCard";
import TransactionCard from "../Cards/TransactionCard/TransactionCard";
import ReportCard from "../Cards/Report/ReportCard";
import BudgetCard from "../Cards/BudgetCard/BudgetCard";
import SubscriptionCard from "../Cards/SubscriptionCard/SubscriptionCard";
import LoansCard from "../Cards/Loans/LoansCard";

export default function SideBar() {
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "#1E1611" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={DrawerStyle} variant="persistent" anchor="left" open={open}>
        <DrawerHeader>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar />
            <Typography variant="h5">Affan</Typography>
          </Stack>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerList />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <Grid container xs={12} spacing={2}>
          <Grid item xs={4}>
            <BalanceCard />
          </Grid>
          <Grid item xs={4}>
            <TransactionCard />
          </Grid>
          <Grid item xs={4}>
            <ReportCard />
          </Grid>
          <Grid item xs={4}>
            <BudgetCard />
          </Grid>
          <Grid item xs={4}>
            <SubscriptionCard />
          </Grid>
          <Grid item xs={4}>
            <LoansCard />
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}
