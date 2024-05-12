"use client";
import { Status } from "@/types/response.status";
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
    checkStatus()
  }, []);

  



  return (
    <>
    </>
  );
}
