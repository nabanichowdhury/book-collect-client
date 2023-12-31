import { Key } from "react";
import ReadListBookCard from "../components/ReadListBookCard";
import Navbar2 from "../layouts/Navbar2";
import { useGetReadListQuery } from "../redux/features/users/userApi";
import { IBook } from "../types/globalTypes";

const ReadListBook = () => {
  const { data } = useGetReadListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  // console.log(data);

  return (
    <div>
      <Navbar2></Navbar2>
      <div className="grid grid-cols-3 gap-4">
        {data?.data?.map(
          (book: {
            bookId: IBook;
            hasRead: boolean;
            _id: Key | null | undefined;
          }) => (
            // console.log(book),
            <ReadListBookCard
              book={book?.bookId}
              hasRead={book?.hasRead}
              key={book._id}
            ></ReadListBookCard>
          )
        )}
      </div>
    </div>
  );
};

export default ReadListBook;
