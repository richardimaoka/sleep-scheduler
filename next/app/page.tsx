"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

export default function Home() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 1400, pv: 3400, amt: 5400 },
    { name: "Page A", uv: 1500, pv: 2400, amt: 3400 },
    { name: "Page A", uv: 1800, pv: 3100, amt: 4400 },
    { name: "Page A", uv: 100, pv: 2100, amt: 4400 },
  ];
  return (
    <main>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </main>
  );
}
