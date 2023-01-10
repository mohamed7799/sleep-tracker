import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="md:w-1/2 w-4/5">
      <form
        action=""
        className="px-5 py-9 rounded-md shadow-lg flex flex-col gap-6 border-2 "
      >
        <input className="form-input" type="text" placeholder="First Name" />
        <input className="form-input" type="text" placeholder="Last Name" />
        <input className="form-input" type="email" placeholder="Email" />
        <input className="form-input" type="password" placeholder="Password" />
        <button className="btn text-blue-500">Sign Up</button>
      </form>

      <h3 className="text-gray-800 py-6 text-center capitalize  font-bold tracking-wide">
        already have an account ?
        <Link className="text-blue-500" to="/log-in">
          {" "}
          Log in
        </Link>
      </h3>
    </div>
  );
};

export default SignUpPage;
