import { Link, useParams } from "react-router-dom";
import { useGetSingleBooksQuery } from "../redux/features/books/bookApi";

export const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleBooksQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

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
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={data?.data?.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="gap-3">
            <h3 className="text-5xl font-bold">{data?.data?.title}</h3>
            <div className=" flex flex-col gap-3">
              <div className="badge badge-secondary badge-outline">
                {data?.data?.genre}
              </div>
              <div className="badge badge-accent">{data?.data?.author}</div>
              <div className="badge badge-primary">
                {data?.data?.publicationYear}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
