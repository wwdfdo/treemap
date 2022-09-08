import React, { useState } from "react";

import { data } from "../data/chartdata";

import * as agCharts from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";

export default function Chart() {
  const [options, setOptions] = useState({
    type: "hierarchy",
    data,
    series: [
      {
        type: "treemap",
        labelKey: "name",
        sizeKey: "size",
        colorKey: "color",
        tooltip: {
          renderer: (params) => {
            return {
              content: `<b>Change</b>: ${params.datum.colorValue.toFixed(2)}%`,
            };
          },
        },
      },
    ],
    title: {
      text: "Crypto Heatmap",
    },
    subtitle: {
      text: "Nft",
    },
  });

  return <AgChartsReact options={options} />;
}
