import React from "react";
import CustomCard from "../CustomHelper/CustomCard";
import { Box } from "@mui/material";

const FinancialAdvice = () => {
  return (
    <>
      <CustomCard title="Financial Advice">
        <Box
          sx={{
            bgcolor: "#302924",
            borderRadius: "10px",
            p: "10px",
            overflow: "scroll",
            mt: 1,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          recusandae, incidunt aliquam facere exercitationem id blanditiis
          porro, dolore dolorem assumenda necessitatibus, nostrum autem
          doloremque vel sint modi omnis sit ipsum.
        </Box>
        <Box></Box>
      </CustomCard>
    </>
  );
};

export default FinancialAdvice;
