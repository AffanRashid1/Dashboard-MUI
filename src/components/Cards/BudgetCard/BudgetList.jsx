import { Stack, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const BudgetList = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        m="10px 0"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <TaskAltIcon />
          <span>
            <Typography
              fontSize="17px"
              fontWeight="700"
              fontFamily="Bai Jamjuree"
            >
              Subscription
            </Typography>
            <Typography fontFamily="Bai Jamjuree" fontSize={15}>
              Automated
            </Typography>
          </span>
        </Stack>
        <Typography fontFamily="Bai Jamjuree">$ 22000</Typography>
      </Stack>
    </>
  );
};

export default BudgetList;
