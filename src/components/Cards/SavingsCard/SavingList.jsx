import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const SavingList = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        m="25px 0"
      >
        <Stack direction="row" spacing={2}>
          <Avatar />
          <Box>
            <Typography
              fontSize="16px"
              fontFamily="Bai Jamjuree"
              fontWeight="bold"
            >
              Pay kid bro’s fees
            </Typography>
          </Box>
        </Stack>
        <Typography color="red" fontFamily="Bai Jamjuree" fontSize="20px">
          $25632
        </Typography>
      </Stack>
    </>
  );
};

export default SavingList;
