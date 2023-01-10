import { BsPlusLg } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <nav className="flex justify-between p-4 items-center">
        <button className="btn flex gap-2 items-center bg-blue-500 text-white capitalize">
          <BsPlusLg /> add new entry
        </button>

        <div className="flex gap-4 items-center">
          <h3 className="text-blue-500 font-semibold capitalize text-xl">
            hi, mohamed amged
          </h3>
          <button className="btn flex gap-2 items-center bg-blue-500 text-white">
            Log out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
