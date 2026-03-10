import UserStatusChart from "./UserStatusChart";
import UserGrowthChart from "./UserGrowthChart";
const UserInfoCharts = ({ stats, users }) => {
  return (
    <div className="flex-col md:flex-row flex justify-center items-center gap-3 w-full">
      <div className="w-full md:w-[50%] ">
        <UserGrowthChart users={users} />
      </div>
      <div className="w-full md:w-[50%]">
        <UserStatusChart stats={stats} />
      </div>
    </div>
  );
};

export default UserInfoCharts;
