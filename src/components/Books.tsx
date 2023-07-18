import { Link } from "react-router-dom";

import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";
import BookCard from "./BookCard";

export const Books = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data);
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <input
          type="range"
          min={0}
          max="150"
          value="50"
          className="range range-xs"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};
