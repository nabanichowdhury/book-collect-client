import { api } from "../../api/apiSlice";
// const { accessToken, isAuthenticated } = useAppSelector((state) => state.user);
// console.log(localStorage.getItem("accessToken"));
const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books`,
      providesTags: ["books"],
    }),
    getBooks: builder.query({
      query: (searchAndFilter) => {
        const { searchTerm, filters } = searchAndFilter;
        const { genre, publicationYear } = filters;

        const queryParams = new URLSearchParams();
        if (searchTerm) {
          queryParams.append("searchTerm", searchTerm);
        }
        if (genre) {
          queryParams.append("genre", genre);
        }
        if (publicationYear) {
          queryParams.append("publicationYear", publicationYear);
        }
        return {
          url: `/books?${queryParams.toString()}`,
        };
      },
      providesTags: ["books"],
    }),

    getSingleBooks: builder.query({
      query: (id) => `/books/${id}`,
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",

        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
      invalidatesTags: ["books"], //eita kore refresh on mount
    }),
    createBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/create-book`,
        method: "POST",

        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    // postComment: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/comment/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["commments"],
    // }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ["commments"],
    // }),
  }),
});
export const {
  useGetBooksQuery,
  useGetSingleBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useGetAllBooksQuery,
} = bookApi;
