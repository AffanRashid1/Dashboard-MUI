import React from "react";
import { Stack, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";

const SubscriptionList = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        m="16px 0"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <CampaignIcon />
          <Typography fontSize={20} fontWeight="bold" fontFamily="Bai Jamjuree">
            LinkedIn
          </Typography>
          &nbsp;
          <Typography fontFamily="Bai Jamjuree"> due 23/12/04</Typography>
        </Stack>
        <Typography fontWeight="500" fontFamily="Bai Jamjuree">
          $ 20000
        </Typography>
      </Stack>
    </>
  );
};

export default SubscriptionList;
