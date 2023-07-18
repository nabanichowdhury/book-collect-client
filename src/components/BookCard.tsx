import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";

type IProp = {
  book: IBook;
};
const BookCard = ({ book }: IProp) => {
  return (
    <div>
      <div className="card w-90 bg-base-100 shadow-xl">
        <Link to={`/book-details/${book._id}`}>
          <figure>
            <img src={book?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {book?.title}
              <div className="badge badge-secondary">{book?.genre}</div>
            </h2>
            <p>{book.reviews}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{book.author}</div>
              <div className="badge badge-outline">{book.publicationYear}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
