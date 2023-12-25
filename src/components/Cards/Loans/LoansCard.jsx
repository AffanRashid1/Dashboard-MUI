import React from "react";
import CustomCard from "../../CustomHelper/CustomCard";
import { Stack } from "@mui/material";
import PieGraph from "./PieGraph";

const LoansCard = () => {
  return (
    <>
      <CustomCard title="Loans">
        <Stack>
          <PieGraph />
        </Stack>
      </CustomCard>
    </>
  );
};

export default LoansCard;
