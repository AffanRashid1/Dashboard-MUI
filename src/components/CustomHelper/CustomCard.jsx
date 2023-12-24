import React from "react";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CustomCard = ({ title, children }) => {
  return (
    <Card sx={{ bgcolor: "secondary.main", padding: 1 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>{title}</Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Stack>
      <Box>{children}</Box>
    </Card>
  );
};

export default CustomCard;
