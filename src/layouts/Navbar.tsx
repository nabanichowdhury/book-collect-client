import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Navbar = () => {
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
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Book Collection</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-30 md:w-auto"
          />
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {localStorage.getItem("accessToken") ? (
            <ul className=" menu-horizontal px-1">
              <li>
                <button onClick={() => handleLogOut()}>LogOut</button>
              </li>
            </ul>
          ) : (
            <ul className=" menu-horizontal px-1">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}

          <li>
            <Link to="/books">All Books</Link>
          </li>

          <li>
            <details>
              <summary>Books</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link to="/read-list">ReadList</Link>
                </li>
                <li>
                  <Link to="/wish-list">WishList</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
