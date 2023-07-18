import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    getSingleBooks: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["commments"],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["commments"],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useGetSingleBooksQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = bookApi;
