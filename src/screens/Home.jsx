import React from "react";
import Layout from "../components/Layout/Layout";
import { Grid } from "@mui/material";
import BalanceCard from "../components/Cards/BalanceCard/BalanceCard";
import TransactionCard from "../components/Cards/TransactionCard/TransactionCard";
import ReportCard from "../components/Cards/Report/ReportCard";
import BudgetCard from "../components/Cards/BudgetCard/BudgetCard";
import SubscriptionCard from "../components/Cards/SubscriptionCard/SubscriptionCard";
import SavingCard from "../components/Cards/SavingsCard/SavingCard";
import LoansCard from "../components/Cards/Loans/LoansCard";
import FinancialAdvice from "../components/FinancialAdvice/FinancialAdvice";

const Home = () => {
  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <BalanceCard />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <TransactionCard />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <ReportCard />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <BudgetCard />
          </Grid>
          <Grid container item lg={4} spacing={2} md={12}>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <SubscriptionCard />
            </Grid>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <SavingCard />
            </Grid>
          </Grid>
          <Grid container item lg={4} spacing={2} md={12}>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <LoansCard />
            </Grid>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <FinancialAdvice />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
