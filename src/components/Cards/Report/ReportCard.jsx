import React from "react";
import CustomCard from "../../CustomHelper/CustomCard";
import BarGraph from "./BarGraph";
import { Box } from "@mui/material";

const ReportCard = () => {
  return (
    <>
      <CustomCard title="Report">
        <Box height="215px">
          <BarGraph />
        </Box>
      </CustomCard>
    </>
  );
};

export default ReportCard;
