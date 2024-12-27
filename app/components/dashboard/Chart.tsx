"use client";

import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

interface iAppProps {
  data: {
    date: string;
    revenue: number;
  }[];
}
interface DataPoint {
    date: string;
    revenue: number;
  }
  const aggregateData = (data: DataPoint[]): DataPoint[] => {
    const aggregated: Record<string, number> = data.reduce(
      (acc, curr) => {
        acc[curr.date] = (acc[curr.date] || 0) + curr.revenue;
        return acc;
      },
      {} as Record<string, number>
    );
  
    return Object.keys(aggregated).map((date) => ({
      date,
      revenue: aggregated[date],
    }));
  };

export default function Chart({ data }: iAppProps) {
  const proccesedData = aggregateData(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={proccesedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          stroke="#3b82f6"
          activeDot={{ r: 8 }}
          dataKey="revenue"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}