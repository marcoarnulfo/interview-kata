"use client";
import { Status } from "@/types/response.status";
import { getStatusBackground, getStatusText } from "@/utils/status.utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  
  // set initial status to pending
  const [status, setStatus] = useState(Status.Pending)

  // check status of the project
  async function checkStatus() {
    try {
      const response = await fetch('/api/status')
      const data = await response.json()
      console.log(data)
      setStatus(data.status)
    } catch (error) {
      setStatus(Status.Error)
      console.error(error)
    }
  }


  useEffect(() => {
    // check status on load
    const intervalId = setInterval(() => {
      if (status !== Status.Success) {
        checkStatus()
      }
    }, 3000)
    // clear interval on unmount
    return () => clearInterval(intervalId);

  }, [status]);





  return (
    <>
      <div className="grid place-content-center h-[100vh] bg-slate-800 font-mono">
        <div className="w-[400px] flex flex-col rounded-lg bg-gray-200 shadow-md p-4">
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
          <div className={`mt-auto p-3 w-full rounded-lg  flex items-center justify-center ${getStatusBackground(status)}`}>
            {getStatusText(status)}
            {status === Status.Pending && 
            <div className="animate-spin inline-block me-3 size-5 border-[3px] ms-2 my-auto border-current border-t-transparent rounded-full" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
