import React from "react";
import CustomCard from "../../CustomHelper/CustomCard";
import { Box } from "@mui/material";
import TransactionList from "./TransactionList";

const TransactionCard = () => {
  let listData = [
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 1",
      date: "2023-12-25",
      price: 19.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
    {
      src: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/assets/image-R7WikpmC.png",
      name: "Dummy Product 2",
      date: "2023-12-26",
      price: 29.99,
    },
  ];

  return (
    <>
      <CustomCard title="All Transaction">
        <Box
          sx={{
            bgcolor: "#302924",
            borderRadius: "10px",
            height: "70%",
            p: "0 10px",
            overflow: "scroll",
            mt: 1,
          }}
        >
          {listData?.map((each, i) => {
            return (
              <TransactionList
                key={i}
                src={each?.src}
                name={each?.name}
                date={each?.date}
                price={each?.price}
              />
            );
          })}
        </Box>
      </CustomCard>
    </>
  );
};

export default TransactionCard;
