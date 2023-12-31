import { Link } from "react-router-dom";

import { ChangeEvent, useState } from "react";
import Loading from "../layouts/Loading";
import AddBook from "../pages/AddBook";
import {
  useGetAllBooksQuery,
  useGetBooksQuery,
} from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";
import BookCard from "./BookCard";

export const Books = () => {
  const [search, setSearch] = useState("");
  let genreSet = new Set();
  let publicationYearSet = new Set();
  const [selectGenre, setSelectedGenre] = useState("");
  const [selectPublicationYear, setSelectedPublicationYear] = useState("");
  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  const handlePublicationYearChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPublicationYear(event.target.value);
  };

  const searchAndFilter = {
    searchTerm: search,
    filters: {
      genre: selectGenre,
      publicationYear: selectPublicationYear,
    },
  };
  const { data: books } = useGetAllBooksQuery(searchAndFilter, {
    refetchOnMountOrArgChange: true,
  });
  const { data, isLoading } = useGetBooksQuery(searchAndFilter, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  for (let i = 0; i < books?.data?.length; i++) {
    genreSet.add(books?.data[i]?.genre);
    publicationYearSet.add(books?.data[i]?.publicationYear);
  }

  if (isLoading) return <Loading></Loading>;
  const isUserLoggedIn = localStorage.getItem("id");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Book Collect
          </Link>
        </div>
        <div className="navbar-center">
          <select
            value={selectGenre}
            onChange={handleGenreChange}
            className="select w-full max-w-xs"
          >
            <option value="" selected>
              Genre
            </option>
            {Array.from(genreSet).map((genre) => {
              return (
                <option key={genre as string} value={genre as string}>
                  {genre as React.ReactNode}
                </option>
              );
            })}
          </select>
          <select
            value={selectPublicationYear}
            onChange={handlePublicationYearChange}
            className="select w-full max-w-xs"
          >
            <option value="" selected>
              PublicationYear
            </option>
            {Array.from(publicationYearSet).map((publicationYear) => {
              return (
                <option
                  key={publicationYear as string}
                  value={publicationYear as string}
                >
                  {publicationYear as React.ReactNode}
                </option>
              );
            })}
          </select>
        </div>

        <div className="navbar-end">
          <div className="form-control">
            <input
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search"
              className="input input-bordered w-30 md:w-auto"
            />
          </div>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {isUserLoggedIn ? (
            <>
              <button
                className="btn btn-outline btn-secondary"
                onClick={() => (window as any).my_modal_5.showModal()}
              >
                Add New Book
              </button>

              <AddBook></AddBook>
            </>
          ) : (
            <button className="btn btn-outline btn-secondary">
              <Link to="/">Add New Book</Link>
            </button>
          )}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {localStorage.getItem("id") ? (
              <></>
            ) : (
              <>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <div>
        <input
          type="range"
          min={0}
          max="150"
          value="50"
          className="range range-xs"
        />
      </div> */}
      <div className="grid grid-cols-3 gap-4">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};
