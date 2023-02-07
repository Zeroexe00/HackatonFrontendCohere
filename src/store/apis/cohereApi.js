import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../config/constants";

export const cohereApi = createApi({
  reducerPath: "cohereApi",
  baseQuery,
  endpoints: (builder) => ({
    getCohereResponse: builder.mutation({
      query: (body) => {
        return {
          url: `/cohere-ai`,
          method: "POST",
          body
        };
      },
    }),
  }),
});

export const {
  useGetCohereResponseMutation
} = cohereApi;
