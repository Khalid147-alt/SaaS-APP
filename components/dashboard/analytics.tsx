import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", documents: 4 },
  { name: "Feb", documents: 7 },
  { name: "Mar", documents: 12 },
  { name: "Apr", documents: 15 },
  { name: "May", documents: 18 },
  { name: "Jun", documents: 24 },
];

export function AnalyticsDashboard() {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="font-semibold mb-4">Document Processing Trends</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="documents"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}