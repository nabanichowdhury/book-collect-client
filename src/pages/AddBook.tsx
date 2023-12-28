import { useState } from "react";
import Loading from "../layouts/Loading";
import { useCreateBookMutation } from "../redux/features/books/bookApi";

const AddBook = () => {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [genre, setGenre] = useState("");
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
  const [createBook, { isLoading, isSuccess }] = useCreateBookMutation();
  if (isLoading) return <Loading></Loading>;
  const handleAddSubmit = () => {
    setLink("");
    setTitle("");
    setAuthor("");
    setPublicationYear("");
    setGenre("");
    const book = {
      data: {
        image: link,
        title: title,
        author: author,
        publicationYear: publicationYear,
        genre: genre,
        createdAt: new Date().toISOString(),
      },
    };

    createBook(book);
  };
  console.log(isSuccess);

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
              onClick={() => handleAddSubmit()}
            >
              Add
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddBook;
