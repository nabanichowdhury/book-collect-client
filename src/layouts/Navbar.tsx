import { Link } from "react-router-dom";

const Navbar = () => {
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
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/books">All Books</Link>
          </li>

          <li>
            <details>
              <summary>Books</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>My books</a>
                </li>
                <li>
                  <a>WishList</a>
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
