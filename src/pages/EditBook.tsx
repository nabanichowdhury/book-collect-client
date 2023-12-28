import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../layouts/Loading";
import {
  useEditBookMutation,
  useGetSingleBooksQuery,
} from "../redux/features/books/bookApi";

interface IBook {
  title: string;
  author: string;
  publicationYear: string;
  genre: string;
}
const EditBook = () => {
  // HOOKS
  const { id } = useParams();
  const navigate = useNavigate();

  // API
  const { data, isLoading: getLoad } = useGetSingleBooksQuery(id);
  const [updateBook, { isLoading: isUpdating }] = useEditBookMutation();

  // Initialize the form state using the custom hook
  const initialState: IBook = {
    title: "",
    author: "",
    publicationYear: "",
    genre: "",
  };
  const [state, setState] = useState(initialState);

  const handleOnChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setState((prev: any) => ({
      ...prev,
      [e.target?.name]: e.target?.value,
    }));
  };

  // If data is available, update the form state
  useEffect(() => {
    if (data?.data) {
      const { title, author, publicationYear, genre } = data.data;
      setState({
        title: title || "",
        author: author || "",
        publicationYear: publicationYear || "",
        genre: genre || "",
      });
    }
  }, [data]);

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateBook({ id: id, data: state });
    navigate(`/book-details/${id}`);
  };

  if (getLoad || !data) return <Loading></Loading>;
  if (isUpdating) return <Loading></Loading>;

  return (
    <div>
      <form onSubmit={handleEditSubmit}>
        <div className="flex flex-col gap-3 ">
          <h3 className="text-2xl">Fill the information about the book</h3>
          {/* <input
            type="text"
            name="image"
            placeholder="Link of the image"
            onChange={handleOnChange}
            value={state?.image}
            className="input input-bordered input-secondary w-full max-w-xs"
          /> */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => handleOnChange(e)}
            value={state?.title}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={handleOnChange}
            value={state?.author}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="text"
            name="publicationYear"
            placeholder="Publish Year"
            onChange={handleOnChange}
            value={state?.publicationYear}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            onChange={handleOnChange}
            value={state?.genre}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>

        <div className="modal-action justify-center">
          {/* if there is a button in form, it will close the modal */}
          <button disabled={isUpdating} className="btn btn-secondary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
