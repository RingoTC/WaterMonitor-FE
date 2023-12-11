"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    useEffect(()=>{
        router.push("/home")
    })
  return (
    <div>
        Loading...
    </div>
  )
}
