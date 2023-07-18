import { api } from "../../api/apiSlice";
// const { accessToken, isAuthenticated } = useAppSelector((state) => state.user);

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    getSingleBooks: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/create-book`,
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: data,
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
export const { useGetBooksQuery, useGetSingleBooksQuery } = bookApi;
