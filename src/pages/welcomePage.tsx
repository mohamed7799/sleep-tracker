import { BsMoonStars } from "react-icons/bs";
import pic from "../assets/welcome-page-pic.svg";
import { Link, Outlet } from "react-router-dom";
const WelcomePage = () => {
  return (
    <div className="md:flex h-screen">
      <div className="h-screen flex-1 flex flex-col">
        <h1 className="flex gap-3 justify-center py-6 text-3xl font-bold text-blue-500 mb-6 md:mb-0 md:text-5xl">
          Sleep Tracker
          <BsMoonStars></BsMoonStars>
        </h1>
        <div className="flex-1 flex flex-col justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="flex-1 bg-blue-500">
        <img className="m-auto w-[400px]" src={pic} alt="" />
        <hr className="h-[4px] w-40 my-5 mx-auto bg-white border-none" />
        <h2 className="text-white text-3xl text-center capitalize font-semibold">
          What is sleep tracker ?
        </h2>
        <p className="text-white text-center text-lg tracking-wide capitalize px-7 py-8 leading-6">
          With this sleep tracker app you will be able to track your sleep
          pattern daily. All you got to do is enter your sleep time and wake up
          time. this app also provides graphs to show your sleep duration for
          the last 7 days, 30 days and all time.
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
