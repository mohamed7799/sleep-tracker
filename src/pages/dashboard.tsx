import { BsPlusLg } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <nav className="md:flex md:flex-row-reverse justify-between p-4 items-center flex-wrap">
        <div className="flex gap-4 items-center justify-between">
          <h3 className="text-blue-500 font-semibold capitalize text-xl">
            hi, mohamed amged
          </h3>
          <button className=" btn flex gap-2 items-center bg-blue-500 text-white">
            Log out
          </button>
        </div>
        <button className="my-4 md:m-0 mx-auto btn flex gap-2 items-center bg-blue-500 text-white capitalize">
          <BsPlusLg /> add new entry
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
