import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../layouts/Loading";
import {
  useEditBookMutation,
  useGetSingleBooksQuery,
} from "../redux/features/books/bookApi";
interface IBook {
  image: string;
  title: string;
  author: string;
  publicationYear: string;
  genre: string;
}
const EditBook = () => {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery(id);
  const [updateBook, { isLoading: isUpdating }] = useEditBookMutation();
  console.log(data?.data?.image);
  const [link, setLink] = useState(`${data?.data?.image}`);
  const [title, setTitle] = useState(`${data?.data?.image}`);
  const [author, setAuthor] = useState(`${data?.data?.image}`);
  const [publicationYear, setPublicationYear] = useState(
    `${data?.data?.image}`
  );
  const [genre, setGenre] = useState(`${book?.genre}`);

  const handleLinkChange = (event: any) => {
    setLink(event.target.value);
  };
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event: any) => {
    setAuthor(event.target.value);
  };
  const handlePublicationYearChange = (event: any) => {
    setPublicationYear(event.target.value);
  };
  const handleGenreChange = (event: any) => {
    setGenre(event.target.value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (isUpdating) return <Loading></Loading>;
  const handleAddSubmit = (id: string) => {
    setLink("");
    setTitle("");
    setAuthor("");
    setPublicationYear("");
    setGenre("");
    const book = {
      image: link,
      title: title,
      author: author,
      publicationYear: publicationYear,
      genre: genre,
    };

    updateBook({ id: id, data: book });
    handleReload();
  };

  return (
    <div>
      <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <div className="flex flex-col gap-3 ">
            <h3 className="text-2xl">Fill the information about the book</h3>
            <input
              type="text"
              placeholder="Link of the image"
              onChange={handleLinkChange}
              value={link}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Title"
              onChange={handleTitleChange}
              value={title}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Author"
              onChange={handleAuthorChange}
              value={author}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Publish Year"
              onChange={handlePublicationYearChange}
              value={publicationYear}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Genre"
              onChange={handleGenreChange}
              value={genre}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>

          <div className="modal-action justify-center">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-secondary"
              onClick={() => handleAddSubmit(id)}
            >
              Add
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default EditBook;
