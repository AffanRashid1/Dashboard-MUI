import React from "react";
import {
  Divider,
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
      icon: <SavingsIcon />,
      text: "Saving",
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
      <List>
        {listItem?.map((each, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>{each?.icon}</ListItemIcon>
              <ListItemText primary={each?.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerList;
