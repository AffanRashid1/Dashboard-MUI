import React from "react";
import { Card, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CustomCard = ({ title, children }) => {
  return (
    <Card
      sx={{
        bgcolor: "secondary.main",
        borderRadius: "15px",
        padding: "20px",
        minHeight: "380px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="15px"
        sx={{
          position: "sticky",
          top: "0",
          bgcolor: "secondary.main",
          zIndex: 3,
          width: "100%",
          padding: "15px 0",
        }}
      >
        <Typography fontFamily="Bai Jamjuree" fontSize="20">
          {title}
        </Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Stack>
      {children}
    </Card>
  );
};

export default CustomCard;
