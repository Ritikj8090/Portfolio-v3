"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from "../public/image/hero.jpg";
import loading1 from "../public/svg/loading1.svg";
import person from "../public/image/person.png";
import StarsCanvas from "./StarBackground";
import Msg from "./Msg";
import { easeInOut, motion } from "framer-motion";

const Hero = ({ dot, border }) => {
  const [Visitor, setVisitor] = useState();
  const [weather, setWeather] = useState([]);
  const url =
    process.env.NODE_ENV === "production"
      ? "https://ritik-jaiswal.vercel.app"
      : "http://localhost:3000";
  const fetchWeatherApi = async () => {
    const res = await axios.get(
      "https://api.weatherapi.com/v1/current.json?key=29af781717ea4d9687b120028232611&q=india"
    );
    setWeather(res.data);
  };
  const fetch = async () => {
    const res = await axios.get(url + "/api/visitor/6565f5237a898e80a86d1942");
    setVisitor(res.data.res.visit);
    const newVisitor = res.data.res.visit + 1;
    await axios.put(url + "/api/visitor/6565f5237a898e80a86d1942", {
      visit: newVisitor,
    });
  };
  useEffect(() => {
    fetchWeatherApi();
    fetch();
  }, []);

   const handleResumeDownloads = async() => {
    window.open("/RITIK.pdf")
    const res = await axios.get(url + "/api/resume/657ab6755bbd82454aa32a4d");
    const cnt = res.data.res.downloads + 1
    await axios.put(url + "/api/resume/657ab6755bbd82454aa32a4d", {downloads:cnt});
   }

  return (
    <section
      id="home"
      className="pt-20 h-screen relative flex w-full flex-col items-center justify-center"
    >
      {weather.length <= 0 ? (
        <div className=" absolute right-5 xl:right-32 top-32 flex flex-col items-end pt-5 pr-5">
          <Image src={loading1} alt="" width={60} height={30} />
        </div>
      ) : (
        <div className="absolute right-5 sm:text-lg text-xs top-32 flex flex-col items-end xl:right-32">
          <div className="flex gap-1">
            <span>{weather.current.temp_c}&deg;C</span>
            <Image
              src={"https:" + weather.current.condition.icon}
              alt=""
              width={5}
              height={5}
              className="sm:w-5 w-3 sm:h-6 h-3"
            />
            <span>{weather.location.country.toUpperCase()}</span>
            <span>
              {weather.location.localtime.slice(10, 13) > 12 ? (
                <>
                  {weather.location.localtime.slice(10, 13) - 12}
                  <span className="cursor px-1">:</span>
                  {weather.location.localtime.slice(14)} PM
                </>
              ) : (
                <>
                  {weather.location.localtime.slice(10, 13) === " 0:"
                    ? "12"
                    : weather.location.localtime.slice(10, 13).length === 3
                    ? weather.location.localtime.slice(10, 12)
                    : weather.location.localtime.slice(10, 13)}
                  <span className="cursor px-1">:</span>
                  {weather.location.localtime.slice(14)} AM
                </>
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full w-2.5 h-2.5  bg-green-500 circle"></div>
            AVAILABLE For WORK
          </div>
          <div className="flex gap-1">
            visitor - {Visitor}{" "}
            <Image src={person} alt="" className="sm:h-5 h-3 mt-[2px] flex items-center sm:w-5 w-3 justify-center" />
          </div>
        </div>
      )}
      <div>
        <h1
          className="lg:text-9xl text-blue-700 font-extrabold text-4xl md:text-8xl tracking-wider  text-shadow"
          onMouseEnter={() => {
            border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
          }}
          onMouseLeave={() => {
            border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
          }}
        >
          Ritik jaiswal
        </h1>
        <div className=" w-full text-center">
          <div className="block lg:text-3xl md:text-xl text-[10px]">
            <span className="px-2">
              I <i>design</i> and develop{" "}
            </span>
            <span className="absolute text-blue-500 font-bold" onMouseEnter={() => {
          border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}
        onMouseLeave={() => {
          border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}>
              <Msg />
            </span>
          </div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, animationDuration: 5, type: easeInOut }}
        className=" fixed bottom-5 right-5 bg-blue-700 hover:bg-blue-800  rounded-xl py-2 px-3 z-[10]"
        onClick={() => handleResumeDownloads()}
        download={true}
        onMouseEnter={() => {
          border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}
        onMouseLeave={() => {
          border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}
      >
        resume
      </motion.button>
    </section>
  );
};

export default Hero;
