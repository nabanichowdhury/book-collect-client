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
        responseHandler: async (response) => {
          if (response.ok) {
            // If the response is successful, parse the JSON data and extract the access token
            return await response.json().then((data) => data.accessToken);
          } else {
            // If there is an error, throw an error with the response status and statusText
            throw new Error(
              `Error: ${response.status} - ${response.statusText}`
            );
          }
        },
        prepare: (accessToken: string) => ({
          payload: {
            accessToken,
            isAuthenticated: !!accessToken, // Set `isAuthenticated` to `true` if accessToken is truthy.
          },
        }),
      }),
    }),
  }),
});
export const { useSignUpUsersMutation, useLoginUsersMutation } = userApi;
