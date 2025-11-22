"use client";
import { decrement, increment } from "@/redux/features/counterController";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const {value}=useSelector((state:any)=>state.counter);
  const dispatch=useDispatch()
  return (
    <div className="flex min-h-screen items-center text-black justify-center gap-10 bg-zinc-50 font-sans dark:bg-black">
<button onClick={()=>{dispatch(increment())}} className="bg-red-200 p-4 cursor-pointer">Increment</button>
<span className="text-white">{value}</span>
<button onClick={()=>{dispatch(decrement())}} className="bg-red-200 p-4 cursor-pointer">Decrement</button>
    </div>
  );
}
