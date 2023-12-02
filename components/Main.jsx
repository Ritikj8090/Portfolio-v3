"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import NavBar from "@/components/NavBar";
import Skill from "@/components/Skill";
import Work from "@/components/Work";

import React, { useEffect, useState } from 'react'

const Main = () => {

    const [first, setFirst] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setFirst(false)
        }, 5000)
    
    })
  return (
    <>
        {
            first ?  <div className=" h-screen w-full absolute"><Loading /></div> 
            : <div>
            <NavBar />
            <Hero />
            <Skill />
            <Work />
            <About />
            <Contact />
        </div>

        }
       
        
    </>
  )
}

export default Main