import React from "react";
import CustomCard from "../CustomHelper/CustomCard";
import { Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FE6C00",
  },
}));
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
        <Box sx={{ width: "90%", margin: "50px auto" }}>
          <Typography m="10px 0">Your Ratings</Typography>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </CustomCard>
    </>
  );
};

export default FinancialAdvice;
