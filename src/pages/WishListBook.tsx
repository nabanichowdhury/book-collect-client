import BookCard from "../components/BookCard";
import { useGetWishListQuery } from "../redux/features/users/userApi";
import { IBook } from "../types/globalTypes";

const WishListBook = () => {
  const { data } = useGetWishListQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishListBook;
