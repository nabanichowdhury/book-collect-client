import img from "../../public/static/images/image.svg";
import BookCard from "../components/BookCard";
import { useGetAllBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";

const Home = () => {
  const searchAndFilter = {
    searchTerm: "",
    filters: {
      genre: "",
      publicationYear: "",
    },
  };
  const { data: books } = useGetAllBooksQuery(searchAndFilter, {
    refetchOnMountOrArgChange: true,
  });

  const last10Books = books?.data?.slice(0, 10);

  return (
    <div className="p-12">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">
              Unleash Your Literary Passion! Explore Our Vast{" "}
              <span className="text-primary">"Book Collection"</span>
            </h1>
            <p className="py-6">
              A book collection is a treasure trove of knowledge and
              imagination, where pages upon pages hold the power to transport
              readers to different worlds and expand their horizons. Each book
              in a collection is a window into unique stories, ideas, and
              perspectives, forming a tapestry of literary exploration.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-center">
          Our Recent added books
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {last10Books?.map((book: IBook) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>

      <footer className="footer footer-center mt-5 text-base-content">
        <aside>
          <p>
            Copyright © 2023 - All right reserved by Book Collection Industries
            Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;
