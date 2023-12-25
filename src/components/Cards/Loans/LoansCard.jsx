import React from "react";
import CustomCard from "../../CustomHelper/CustomCard";
import { Box, Stack, Typography } from "@mui/material";
import PieGraph from "./PieGraph";

const LoansCard = () => {
  return (
    <>
      <CustomCard title="Loans">
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box sx={{ width: "50%", height: "215px" }}>
            <PieGraph />
          </Box>
          <Stack spacing={3} alignItems="center">
            <Typography fontWeight={600} fontSize={20}>
              Savings Target
            </Typography>
            <Typography fontSize={20}>$500,000</Typography>
            <Typography fontWeight={600} fontSize={20}>
              Target Reached
            </Typography>
            <Typography fontSize={20}>$250,000</Typography>
          </Stack>
        </Stack>
      </CustomCard>
    </>
  );
};

export default LoansCard;
