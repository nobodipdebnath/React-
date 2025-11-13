import React from "react";

import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from "recharts";
export const Chart = () => {
    const productData = [
      {
        product: "Laptop",
        sales: 4200,
        orders: 3100,
        revenue: 2600,
      },
      {
        product: "Smartphone",
        sales: 3800,
        orders: 2800,
        revenue: 2400,
      },
      {
        product: "Headphones",
        sales: 4600,
        orders: 3500,
        revenue: 2900,
      },
      {
        product: "Keyboard",
        sales: 4100,
        orders: 3700,
        revenue: 2700,
      },
      {
        product: "Monitor",
        sales: 4900,
        orders: 4000,
        revenue: 3100,
      },
      {
        product: "Mouse",
        sales: 5300,
        orders: 4500,
        revenue: 3300,
      },
      {
        product: "Speaker",
        sales: 3900,
        orders: 3200,
        revenue: 2500,
      },
    ];


  return (
    <div className="flex justify-center items-center">
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={productData}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="product" />
        <YAxis width="auto" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="orders"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};
