"use client";
import { Status } from "@/types/response.status";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [status, setStatus] = useState(Status.Pending)


  async function checkStatus() {
    try {
      const response = await fetch('/api/status')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    //checkStatus()
  }, []);





  return (
    <>
      <div className="grid place-content-center h-[100vh] bg-slate-800 font-mono">
        <div className=" w-[400px] flex flex-col rounded-lg  bg-gray-200 shadow-md p-4">
          <div className="">
            <Image
              src="https://generated.vusercontent.net/placeholder.svg"
              alt="placeholder img"
              width={360}
              height={200}
              className="h-[200px] w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="pt-5">
            <h2>Project Lorem, ipsum.</h2>
            <p className="py-3">Status of project Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias.</p>
          </div>
          <div className='mt-auto p-3 w-full rounded-lg text-center bg-yellow-300'>
            Pending
          </div>
        </div>
      </div>
    </>
  );
}
