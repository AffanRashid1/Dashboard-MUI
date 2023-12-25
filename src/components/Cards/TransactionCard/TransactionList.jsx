import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const TransactionList = ({ src, name, date, price }) => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        m="26px 0"
      >
        <Stack direction="row" spacing={2}>
          <Avatar src={src} />
          <Box>
            <Typography
              fontSize="16px"
              fontFamily="Bai Jamjuree"
              fontWeight="bold"
            >
              {name}
            </Typography>
            <Typography>{date}</Typography>
          </Box>
        </Stack>
        <Typography color="red" fontFamily="Bai Jamjuree" fontSize="20px">
          ${price}
        </Typography>
      </Stack>
    </>
  );
};

export default TransactionList;
