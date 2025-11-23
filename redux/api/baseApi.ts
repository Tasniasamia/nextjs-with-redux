import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface post{
    userId: number
    id: number,
    title:string,
    body:string
}
export const baseApi=createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getPosts: build.query<post[],void>({
      query: () => `/posts`,
    }),
    addPost:build.mutation<any,Partial<post>>({
        query:(body)=>{
            return {
                url: `/posts`,
                method: 'POST',
                body,
              }
        }
    })
  }),
})

export const {useGetPostsQuery,useAddPostMutation}=baseApi;