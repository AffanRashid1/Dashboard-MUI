import React from "react";

import CustomCard from "../../CustomHelper/CustomCard";
import { Box, Stack, Typography } from "@mui/material";
import BudgetList from "./BudgetList";

const BudgetCard = () => {
  return (
    <>
      <CustomCard title="Budget">
        <Stack direction="row" justifyContent="space-between">
          <Typography
            fontSize="30px"
            fontWeight="500"
            fontFamily="Bai Jamjuree"
          >
            Cash
          </Typography>
          <Typography
            fontSize="20px"
            fontWeight="500"
            fontFamily="Bai Jamjuree"
          >
            $44,000
          </Typography>
        </Stack>
        <Box
          sx={{
            bgcolor: "#302924",
            borderRadius: "10px",
            height: "50%",
            p: "0 10px",
            overflow: "scroll",
            mt: 1,
          }}
        >
          <BudgetList />
          <BudgetList />
          <BudgetList />
          <BudgetList />
          <BudgetList />
          <BudgetList />
          <BudgetList />
        </Box>
      </CustomCard>
    </>
  );
};

export default BudgetCard;
