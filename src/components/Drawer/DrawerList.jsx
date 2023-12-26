import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import PaidIcon from "@mui/icons-material/Paid";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SavingsIcon from "@mui/icons-material/Savings";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const DrawerList = () => {
  let listItem = [
    {
      icon: <HomeIcon />,
      text: "Home",
    },
    {
      icon: <FeaturedPlayListIcon />,
      text: "Budget",
    },
    {
      icon: <PaidIcon />,
      text: "Budget",
    },
    {
      icon: <SubscriptionsIcon />,
      text: "Subscription",
    },

    {
      icon: <LocalAtmIcon />,
      text: "Transaction",
    },
    {
      icon: <SummarizeIcon />,
      text: "Loans",
    },
    {
      icon: <SavingsIcon />,
      text: "Reports",
    },
    {
      icon: <PaymentIcon />,
      text: "Financial Advice",
    },
    {
      icon: <PersonIcon />,
      text: "Account",
    },
    {
      icon: <SettingsIcon />,
      text: "Setting",
    },
  ];

  return (
    <>
      <List sx={{ bgcolor: "secondary.main" }}>
        {listItem.map((each, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {each.icon}
              </ListItemIcon>
              <ListItemText
                primary={each.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerList;
