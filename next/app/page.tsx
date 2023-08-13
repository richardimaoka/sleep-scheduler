"use client";
import { LineChart, Line, XAxis, YAxis } from "recharts";

export default function Home() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 1400, pv: 3400, amt: 5400 },
    { name: "Page A", uv: 1500, pv: 2400, amt: 3400 },
    { name: "Page A", uv: 1800, pv: 3100, amt: 4400 },
  ];
  return (
    <main>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <XAxis />
        <YAxis />
      </LineChart>
    </main>
  );
}
