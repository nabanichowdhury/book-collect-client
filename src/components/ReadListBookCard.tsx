import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMarkAsReadUnreadMutation } from "../redux/features/users/userApi";
import { IBook } from "../types/globalTypes";

type IProp = {
  book: IBook;
  hasRead: boolean;
};
const ReadListBookCard = ({ book, hasRead }: IProp) => {
  const [markReadUnread] = useMarkAsReadUnreadMutation(undefined);
  const handleReadUnread = (hasRead: boolean) => {
    const data = {
      data: {
        bookId: book?._id,
      },
    };
    markReadUnread(data);
    if (hasRead) {
      toast.warning("Marked as unread", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Marked as read", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    console.log("marked as read");
  };
  return (
    <div>
      <div className="card w-90 bg-base-100 shadow-xl">
        {/* <Link to={`/book-details/${book?._id}`}> */}
        <figure>
          <img src={book?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book?.title}
            <div className="badge badge-secondary">{book?.genre}</div>
          </h2>
          <p>{book?.reviews}</p>
          {hasRead ? (
            <div className="badge badge-success">Done Reading</div>
          ) : (
            <div className="badge badge-error">Not Read Yet</div>
          )}
          {hasRead ? (
            <button
              onClick={() => handleReadUnread(hasRead)}
              className="badge badge-primary"
            >
              Mark as not read
            </button>
          ) : (
            <button
              onClick={() => handleReadUnread(hasRead)}
              className="badge badge-primary"
            >
              Mark as Read
            </button>
          )}
          <ToastContainer />
          <div>
            <button className="btn-primary"></button>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{book?.author}</div>
            <div className="badge badge-outline">{book?.publicationYear}</div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ReadListBookCard;
