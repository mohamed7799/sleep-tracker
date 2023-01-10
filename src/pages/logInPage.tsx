import { Link } from "react-router-dom";

const logInPage = () => {
  return (
    <div className="md:w-1/2 w-4/5">
      <form
        action=""
        className="px-5 py-9 rounded-md shadow-lg flex flex-col gap-6 border-2 "
      >
        <input className="form-input" type="email" placeholder="Email" />
        <input className="form-input" type="password" placeholder="Password" />
        <button className="btn text-white bg-blue-500">Log In</button>
      </form>

      <h3 className="text-gray-800 p-3 text-center capitalize my-6 font-bold tracking-wide">
        don`t have an account ?
        <Link className="text-blue-500" to="/sign-up">
          {" "}
          sign up
        </Link>
      </h3>
    </div>
  );
};

export default logInPage;
