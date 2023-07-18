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
      transformResponse: (response: ILoginResponse, meta, arg) => response.data,
    }),
  }),
});
export const { useSignUpUsersMutation, useLoginUsersMutation } = userApi;
