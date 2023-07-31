import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar2 from "../layouts/Navbar2";
import {
  useDeleteBookMutation,
  useGetSingleBooksQuery,
} from "../redux/features/books/bookApi";
import {
  useAddReadListMutation,
  useAddWishListMutation,
} from "../redux/features/users/userApi";

export const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading: isGetLoading } = useGetSingleBooksQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const isOwner = localStorage.getItem("id") == data?.data?.owner;

  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const [addWishList, { isLoading: addLoading }] = useAddWishListMutation();
  const [addReadList, { isLoading: readLoading }] = useAddReadListMutation();

  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    deleteBook(id);
    navigate("/books");
  };
  const handleAddWishList = () => {
    const book = {
      data: {
        bookId: id,
      },
    };
    addWishList(book);
    navigate("/wish-list");
  };
  const handleAddReadList = () => {
    const book = {
      data: {
        bookId: id,
      },
    };
    addReadList(book);
    navigate("/read-list");
  };
  if (isDeleting)
    return (
      <div className="alert alert-success">
        <span>Book deleted Successfully</span>
      </div>
    );

  return (
    <div>
      <Navbar2></Navbar2>

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
              <div className="flex flex-row gap-3">
                <div>
                  {/* The button to open modal */}
                  <label htmlFor="my_modal_6" className="btn btn-primary">
                    WishList
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Do you want to add this book to your wishlist?
                      </p>
                      <div className="modal-action">
                        <label
                          htmlFor="my_modal_6"
                          className="btn"
                          onClick={() => handleAddWishList()}
                        >
                          YES
                        </label>
                        <label htmlFor="my_modal_6" className="btn">
                          NO
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* The button to open modal */}
                  <label htmlFor="my_modal_7" className="btn btn-secondary">
                    ReadList
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Do u want to read this book or already read?
                      </p>
                      <div className="modal-action">
                        <label
                          htmlFor="my_modal_7"
                          className="btn"
                          onClick={() => handleAddReadList()}
                        >
                          Save
                        </label>
                        <label htmlFor="my_modal_7" className="btn">
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isOwner ? (
                <div className="badge badge-primary">Owner</div>
              ) : (
                <></>
              )}
              <div className="flex flex-row gap-3">
                {isOwner ? (
                  <Link to={`/edit-book/${data?.data?._id}`}>
                    <button className="btn btn-active btn-accent">
                      Edit Book
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled={!isOwner}
                    className="btn btn-active btn-accent"
                  >
                    Edit Book
                  </button>
                )}

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
