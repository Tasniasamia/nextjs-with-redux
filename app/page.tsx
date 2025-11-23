"use client";
import { useAddPostMutation, useGetPostsQuery } from "@/redux/api/baseApi";
import { decrement, increment } from "@/redux/features/counterController";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { data, isLoading, isError } = useGetPostsQuery();
  const [setPost, { data: response }] = useAddPostMutation();
  console.log("data", data);
  const { value } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const onclickFn = () => {
    const posts = {
      userId: 2,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    setPost(posts)
  };
  return (
    <div>
      <div className="flex  items-center text-black justify-center gap-10 bg-zinc-50 font-sans dark:bg-black">
        <button
          onClick={() => {
            dispatch(increment(5));
          }}
          className="bg-red-200 p-4 cursor-pointer"
        >
          Increment
        </button>
        <span className="text-white">{value}</span>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="bg-red-200 p-4 cursor-pointer"
        >
          Decrement
        </button>
      </div>

      <button
          onClick={() => {
            onclickFn();
          }}
          className="bg-green-500 p-4 text-white rounded-lg cursor-pointer"
        >
          Add POSTS
        </button>
      <div>
        {data?.slice(0,5)?.map((i: any) => {
          return (
            <p key={i?.id} className="text-white ">
              {i?.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}
