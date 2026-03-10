import InfoCards from "../components/InfoCards";
import UserList from "../components/UserList";
import { useMemo, useState, useEffect } from "react";
import useFilters from "../hooks/useFilters";
import { useSelector, useDispatch } from "react-redux";
import { usersDataAsync, getStatsDataAsync } from "../redux/usersDataSlice";
import UserInfoCharts from "../components/UserInfoCharts";
const MainDashboard = () => {
  const users = useSelector((state) => state.UsersData.users);
  const stats = useSelector((state) => state.UsersData.stats);
  const { filteredUsers } = useFilters();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersDataAsync());
    dispatch(getStatsDataAsync());
  }, []);

  const dashboardCardsData = stats
    ? [
        {
          id: 1,
          title: "Total Users",
          value: stats.totalUsers,
          trend: "+5%",
          status: "up",
        },
        {
          id: 2,
          title: "Active Users",
          value: stats.activeUsers,
          trend: "-2%",
          status: "down",
        },
        {
          id: 3,
          title: "Inactive Users",
          value: stats.inActiveUsers,
          trend: "+10%",
          status: "up",
        },
        {
          id: 4,
          title: "New Signups",
          value: stats.newSignUps,
          trend: "+15%",
          status: "up",
        },
      ]
    : [];

  return (
    <>
      <div
        className="px-2 md:px-12 pt-8 p-6 flex flex-col gap-6 
bg-gray-100 dark:bg-zinc-900 
min-h-screen 
text-gray-800 dark:text-zinc-200"
      >
        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {dashboardCardsData.map((card) => (
            <div key={card.id} className="flex-1">
              <InfoCards card={card} />
            </div>
          ))}
        </div>

        {/* Charts */}
        <div
          className="bg-white dark:bg-zinc-800 
border border-gray-200 dark:border-zinc-700 
p-4 rounded-xl shadow-sm mt-4"
        >
          <h2 className="text-lg font-semibold text-gray-800 dark:text-zinc-200 mb-4">
            User Analytics
          </h2>
          <UserInfoCharts stats={stats} users={users} />
        </div>

        {/* Users List */}
        <UserList limit={4} recentUsers filteredUsers={filteredUsers} />
      </div>
    </>
  );
};

export default MainDashboard;
