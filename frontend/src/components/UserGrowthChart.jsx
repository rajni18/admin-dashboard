import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useMemo } from "react";

const UserGrowthChart = ({ users }) => {
  const growthData = useMemo(() => {
    const months = {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apr: 0,
      May: 0,
      Jun: 0,
      Jul: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0,
    };

    users.forEach((user) => {
      const date = new Date(user.createdAt);
      const monthIndex = date.getMonth();

      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const month = monthNames[monthIndex];

      months[month]++;
    });

    return Object.keys(months).map((month) => ({
      month,
      users: months[month],
    }));
  }, [users]);
  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">User Growth</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={growthData} fill="#3b82f6">
          <CartesianGrid stroke="#88a6e0" strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
