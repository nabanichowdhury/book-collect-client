import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../layouts/Loading";
import { useSignUpUsersMutation } from "../redux/features/users/userApi";

export const SignUp = () => {
  const [signUp, { isLoading }] = useSignUpUsersMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    setEmail("");
    setPassword("");
    const user = {
      data: {
        email: email,
        password: password,
      },
    };
    signUp(user);
    navigate("/login");
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Sign up Come to place of{" "}
              <span className="text-primary">Knowledge</span>
            </h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  onChange={handleEmailChange}
                  value={email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  onChange={handlePasswordChange}
                  value={password}
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={() => handleSubmit()}
                  className="btn btn-primary"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
