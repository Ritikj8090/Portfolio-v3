"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navlinks } from "../constant/index";
import menu from '../public/svg/menu.svg';
import close from '../public/svg/close.svg';
import Image from "next/image";

const NavBar = ({dot, border}) => {

  const [prevScroll, setprevScroll] = useState(0);
  const [activeNavBar, setActiveNavBar] = useState("#home");

  const handleScroll = () => {
    setprevScroll(window.scrollY);
    scroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  function scroll() {
    if (document.documentElement.scrollTop >= prevScroll) {
      document.getElementById("navlist").style.top = "-80px";
    } else {
      document.getElementById("navlist").style.top = "0px";
    }
  }

  const [menuToggle, setMenuToggle] = useState(true)

  return (
    <nav id="navlist" className=" w-full  fixed z-10 p-5 ease-in-out duration-700 bg-transparent">
      <div className="flex bg rounded-3xl justify-between gap-10 mx-4 p-2 px-5 ">
      <div
        onClick={() => scrollTo(0, 0)}
        className="flex items-center justify-center md:text-4xl text-2xl tracking-wide cursor-none"
        onMouseEnter={() => {
          border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}
        onMouseLeave={() => {
          border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}
      >
        RITIK<span className=" text-blue-700 cursor">_</span>
      </div>
      <div className="gap-8 hidden md:flex">
        {navlinks.map((link) => {
          return (
            <Link
              href={link.link}
              key={link.number}
              className={`relative items-center justify-center text-gray-300 ${
                activeNavBar === link.link ? "text-white" : ""
              } hover:text-gray-500 cursor-none`}
              onClick={() => setActiveNavBar(link.link)}
              onMouseEnter={() => {
                border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
              onMouseLeave={() => {
                border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
            >
              <span className="flex justify-end text-[10px] relative top-2">
                {link.number}
              </span>
              <span className="">{link.name}</span>
            </Link>
          );
        })}
      </div>
      <div>
      <div className="md:hidden flex">
        <Image src={menuToggle ? menu : close} alt="menu" className="h-7 w-16 " onClick={() => { setMenuToggle(!menuToggle) }} />
        <div className={`${menuToggle ? "hidden" : "flex"} p-6 bg-black absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none tracking-wide  flex justify-end items-start flex-col gap-2">
            {
              navlinks.map((nav) => {
                return (
                  <a href={nav.link}
                    className={`${activeNavBar === nav.name ? "text-white" : ""
                      } cursor-none text-gray-300 hover:text-gray-500
                      } mr-3 ease-in-out duration-500`}
                    key={nav.number}
                    onClick={() => { setMenuToggle(!menuToggle); setActiveNavBar(nav.link) }}
                  >
                    {nav.name}
                  </a>

                )
              })
            }
          </ul>
        </div>
      </div>
        
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
