import { Link, useNavigate, useParams } from "react-router-dom";
import EditBook from "../pages/EditBook";
import {
  useDeleteBookMutation,
  useGetSingleBooksQuery,
} from "../redux/features/books/bookApi";

export const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleBooksQuery(id);
  const isOwner = localStorage.getItem("id") == data?.data?.owner;

  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleDelete = (id: string) => {
    deleteBook(id);
    navigate("/books");
  };
  if (isDeleting)
    return (
      <div className="alert alert-success">
        <span>Book deleted Successfully</span>
      </div>
    );

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
            <div className=" flex flex-col gap-3">
              <h3 className="text-5xl font-bold">{data?.data?.title}</h3>
              <div className="badge badge-secondary ">{data?.data?.genre}</div>
              <div className="badge badge-accent">{data?.data?.author}</div>
              <div className="badge badge-primary">
                {data?.data?.publicationYear}
              </div>
              {isOwner ? (
                <div className="badge badge-primary">Owner</div>
              ) : (
                <></>
              )}
              <div className="flex flex-row gap-3">
                <button
                  disabled={!isOwner}
                  className="btn btn-active btn-accent"
                  onClick={() => window.my_modal_8.showModal()}
                >
                  Edit Book
                </button>
                <EditBook></EditBook>
                <button
                  disabled={!isOwner}
                  className="btn btn-active btn-ghost"
                  onClick={() => window.my_modal_1.showModal()}
                >
                  Delete Book
                </button>
                <dialog id="my_modal_1" className="modal">
                  <form
                    onSubmit={() => handleDelete(id!)}
                    method="dialog"
                    className="modal-box"
                  >
                    <h3 className="font-bold text-lg">Delete Book</h3>
                    <p className="py-4">
                      Are you sure you want to delete the book?
                    </p>
                    <div className="modal-action">
                      {/* if there is a button in form, it will close the modal */}
                      <div className="flex flex-row gap-3">
                        <button className="btn btn-error">Proceed</button>
                        <button className="btn">Cancel</button>
                      </div>
                    </div>
                  </form>
                </dialog>
              </div>
              {isOwner ? (
                <div className="badge badge-secondary badge-outline">
                  You can Edit or Delete the book
                </div>
              ) : (
                <div className="badge badge-secondary badge-outline">
                  Only Owner can edit or delete the book
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
