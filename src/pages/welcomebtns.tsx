import { Link } from "react-router-dom";

const WelcomeBtns = () => {
  return (
    <div className="md:w-1/2 w-4/5">
      <Link to="/log-in">
        <button className="btn w-full bg-blue-500 text-white mb-5">
          Log in
        </button>
      </Link>
      <Link to="/sign-up">
        <button className="btn w-full text-blue-500">Sign up</button>
      </Link>
    </div>
  );
};

export default WelcomeBtns;
