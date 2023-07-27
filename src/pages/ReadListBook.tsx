import ReadListBookCard from "../components/ReadListBookCard";
import { useGetReadListQuery } from "../redux/features/users/userApi";

const ReadListBook = () => {
  const { data } = useGetReadListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    //pollingInterval: 30000,
  });
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data?.data?.map(
          (book) => (
            console.log(book),
            (
              <ReadListBookCard
                book={book?.bookId}
                hasRead={book?.hasRead}
                key={book._id}
              ></ReadListBookCard>
            )
          )
        )}
      </div>
    </div>
  );
};

export default ReadListBook;
