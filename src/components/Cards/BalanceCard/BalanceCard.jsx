import React from "react";
import CustomCard from "../../CustomHelper/CustomCard";
import { Box, Stack, Typography } from "@mui/material";

const BalanceCard = () => {
  return (
    <>
      <CustomCard title="Card">
        <Box
          p={2}
          sx={{
            background:
              "linear-gradient(114.07deg,rgba(66,59,55,.6) 3.49%,rgba(66,59,55,0) 34.7%),linear-gradient(138.58deg,rgba(59,43,30,.37) 43.56%,#fea767 112.68%)",
            borderRadius: "10px",
          }}
        >
          <Typography>Balance</Typography>
          <Typography fontSize="27px" fontWeight="500" fontFamily="monospace">
            $44,000
          </Typography>
          <Typography
            fontSize="25px"
            fontWeight="500"
            fontFamily="monospace"
            m="10px 0"
          >
            **** **** **** 5678
          </Typography>
          <Typography>Expires</Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>12/23</Typography>
            <Stack direction="row">
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  zIndex: "2",
                  marginRight: "-10px",
                }}
              ></div>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "yellow",
                  borderRadius: "50%",
                }}
              ></div>
            </Stack>
          </Stack>
        </Box>
      </CustomCard>
    </>
  );
};

export default BalanceCard;
