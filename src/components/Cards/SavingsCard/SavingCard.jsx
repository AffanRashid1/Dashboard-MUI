import React from "react";
import CustomCard from "../../CustomHelper/CustomCard";
import SavingList from "./SavingList";
import { Box } from "@mui/material";
const SavingCard = () => {
  return (
    <>
      <CustomCard title="Saving">
        <Box
          sx={{
            bgcolor: "#302924",
            borderRadius: "10px",
            height: "215px",
            p: "0 10px",
            overflow: "scroll",
            mt: 1,
          }}
        >
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
          <SavingList />
        </Box>
      </CustomCard>
    </>
  );
};

export default SavingCard;
