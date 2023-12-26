import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
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

const DrawerList = ({ open }) => {
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
      icon: <PaidIcon />,
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
      text: "Settings",
    },
  ];

  return (
    <>
      <List sx={{ bgcolor: "secondary.main" }}>
        <ListItem sx={{ margin: "5px 0" }}>
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
              <Avatar
                src="https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"Affan"}
              sx={{
                opacity: open ? 1 : 0,
                color: "white",
              }}
              primaryTypographyProps={{
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: "Bai Jamjuree",
              }}
            />
          </ListItemButton>
        </ListItem>
        {listItem.map((each, index) => (
          <ListItem key={index} sx={{ display: "block" }}>
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
                sx={{
                  opacity: open ? 1 : 0,
                  color: "white",
                }}
                primaryTypographyProps={{
                  fontSize: "20px",
                  fontFamily: "Bai Jamjuree",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerList;
