import React from "react";
import CustomCard from "../../CustomHelper/CustomCard";
import SubscriptionList from "./SubscriptionList";
import { Box } from "@mui/material";

const SubscriptionCard = () => {
  return (
    <>
      <CustomCard title="Subscription">
        <Box
          sx={{
            bgcolor: "#302924",
            borderRadius: "10px",
            height: "70%",
            p: "0 10px",
            overflow: "scroll",
            mt: 1,
          }}
        >
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
          <SubscriptionList />
        </Box>
      </CustomCard>
    </>
  );
};

export default SubscriptionCard;
