import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Navbar2 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("id");
    handleReload();
    if (isLoading) return <Loading></Loading>;
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          {localStorage.getItem("id") ? (
            <ul className="menu menu-horizontal px-1">
              <li>
                <button onClick={() => handleLogOut()}>LogOut</button>
              </li>
            </ul>
          ) : (
            <ul className=" menu-horizontal px-1">
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
