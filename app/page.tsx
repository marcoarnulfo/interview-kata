"use client";
import { Status } from "@/types/response.status";
import { useState } from "react";

export default function Home() {
  // console.log(process.env.API_URL)
  // console.log(process.env.API_KEY)
  

  const [status, setStatus] = useState(Status.Pending)


  async function checkStatus() {
    try {
      const apiUrl = process.env.API_URL
      const apiKey = process.env.API_KEY
      if (apiUrl && apiKey) {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'x-api-key': apiKey 
          }
        })
        const data = await response.json();
        console.log(data)
      }
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <>
    </>
  );
}
