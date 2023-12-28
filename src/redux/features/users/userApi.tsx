import { ILoginResponse } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUpUsers: builder.mutation({
      query: ({ data }) => ({
        url: `auth/signUp`,
        method: "POST",
        body: data,
      }),
    }),
    loginUsers: builder.mutation({
      query: ({ data }) => ({
        url: `auth/login`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response: ILoginResponse) => response.data,
    }),
    addWishList: builder.mutation({
      query: ({ data }) => ({
        url: `users/wish-list/`,
        method: "POST",
        body: data,
        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    addReadList: builder.mutation({
      query: ({ data }) => ({
        url: `users/read-list/`,
        method: "POST",
        body: data,
        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    markAsReadUnread: builder.mutation({
      query: ({ data }) => ({
        url: `users/mark-read-unread/`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
    }),

    getWishList: builder.query({
      query: () => ({
        url: `users/wish-list/`,
        method: "GET",
        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    getReadList: builder.query({
      query: () => ({
        url: `users/read-list/`,
        method: "GET",
        headers: {
          authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});
export const {
  useSignUpUsersMutation,
  useLoginUsersMutation,
  useAddWishListMutation,
  useGetWishListQuery,
  useAddReadListMutation,
  useGetReadListQuery,
  useMarkAsReadUnreadMutation,
} = userApi;
