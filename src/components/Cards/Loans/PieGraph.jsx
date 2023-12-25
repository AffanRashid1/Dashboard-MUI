import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "Target", color: "#fe6c00" },
  { id: 1, value: 15, label: "", color: "#29221D" },
];

export default function PieGraph() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      height={200}
    />
  );
}
