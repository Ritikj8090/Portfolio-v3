"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import NavBar from "@/components/NavBar";
import Skill from "@/components/Skill";
import Work from "@/components/Work";

import React, { useEffect, useRef, useState } from 'react'

const Main = () => {
    const dotRef = useRef(null);
  const borderRef = useRef(null);
  const [mdot, setmdot] = useState({doot: 0,pooint: 0,});
    const [first, setFirst] = useState(true)

    useEffect(() => {
        const dot = dotRef.current;
        const border = borderRef.current;
        setmdot({
          doot: dotRef.current,
          pooint: borderRef.current,
        });
    
        window.addEventListener("mousemove", function (e) {
          const posX = e?.clientX;
          const posY = e?.clientY;
    
          dot.style.left = `${posX}px`;
          dot.style.top = `${posY}px`;
    
          border.style.left = `${posX}px`;
          border.style.top = `${posY}px`;
     
          border.animate(
            {
              left: `${posX}px`,
              top: `${posY}px`,
            },
            { duration: 500, fill: "forwards" }
          );
        });
        const VisiterUpdate = async () => {
          const visit = await axios.get('https://portfolio-v2-production-30b2.up.railway.app/visit/653fbc79e7d068a47fb8cca3')
          const curr = visit.data.resa.visit
          const newCurr = curr + 1
          setVisiter(newCurr)
          await axios.put('https://portfolio-v2-production-30b2.up.railway.app/visit/653fbc79e7d068a47fb8cca3', {visit: newCurr})
        }
        VisiterUpdate()
    
      }, []);

    useEffect(() => {
        setTimeout(() => {
            setFirst(false)
        }, 5000)
    
    })
  return (
    <>
    <div ref={borderRef} className="cursor-border z-[40]"></div>
      <div ref={dotRef} className="cursor-point z-[40]"></div>
        {
            first ?  <div className=" h-screen w-full absolute"><Loading /></div> 
            : <div>
            <NavBar dot={mdot.doot} border={mdot.pooint} />
            <Hero dot={mdot.doot} border={mdot.pooint} />
            <Skill dot={mdot.doot} border={mdot.pooint} />
            <Work dot={mdot.doot} border={mdot.pooint} />
            <About dot={mdot.doot} border={mdot.pooint} />
            <Contact dot={mdot.doot} border={mdot.pooint} />
        </div>

        }
       
        
    </>
  )
}

export default Main