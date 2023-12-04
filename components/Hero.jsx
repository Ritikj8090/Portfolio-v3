"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from '../public/image/hero.jpg'
import loading1 from '../public/svg/loading1.svg';
import person from '../public/image/person.png';
import StarsCanvas from "./StarBackground";
import Msg from "./Msg";


const Hero = () => {
  const [Visitor, setVisitor] = useState()
  const [weather, setWeather] = useState([]);
  const url = process.env.NODE_ENV === "production" ? "https://ritik-jaiswal.vercel.app" : "http://localhost:3000"
  const fetchWeatherApi = async () => {
    const res = await axios.get(
      "https://api.weatherapi.com/v1/current.json?key=29af781717ea4d9687b120028232611&q=india"
    ); 
    setWeather(res.data); 
  };
  const fetch = async () => {
    const res = await axios.get(url + "/api/visitor/6565f5237a898e80a86d1942")
    console.log(res.data.res.visit)
    setVisitor(res.data.res.visit)
    const newVisitor = res.data.res.visit + 1
    await axios.put(url + "/api/visitor/6565f5237a898e80a86d1942", { visit: newVisitor })
  }
  useEffect(() => {
    fetchWeatherApi();
    fetch()
  }, []); 
  return (
    <div id="home" className="pt-20 h-screen relative flex w-full flex-col items-center justify-center">
      <StarsCanvas />
      {weather.length <= 0 ? (
        <div className=" absolute right-5 xl:right-32 top-32 flex flex-col items-end pt-5 pr-5">
          <Image src={loading1} alt="" width={60} height={30} />
        </div>
      ) : (
        <div className="absolute right-5 sm:text-lg text-xs top-32 flex flex-col items-end xl:right-32">
          <div className="flex gap-1">
            <span>{weather.current.temp_c}&deg;C</span>
            <img src={weather.current.condition.icon} alt="" width={5} height={5} className="w-5 h-6" />
            <span>{weather.location.country.toUpperCase()}</span>
            <span>{weather.location.localtime.slice(10, 13) > 12 ?
              <>{weather.location.localtime.slice(10, 13) - 12} <span className="cursor">:</span> {weather.location.localtime.slice(14)} PM</>
              : <>{weather.location.localtime.slice(10, 13)  === " 0:" ? "12" : weather.location.localtime.slice(10, 13).length === 3 ? weather.location.localtime.slice(10, 12) : weather.location.localtime.slice(10, 13)} <span className="cursor">:</span> {weather.location.localtime.slice(14)} AM</>
            }</span>


          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full w-2.5 h-2.5  bg-green-500 circle"></div>
            AVAILABLE For WORK
          </div>
          <div className="flex gap-1">visitor - {Visitor} <Image src={person} alt="" className="h-5 w-5" /></div>
        </div>
      )}
      <div>
        <h1 className="lg:text-9xl text-blue-700 font-extrabold text-4xl md:text-8xl tracking-wider cursor-default text-shadow">Ritik jaiswal</h1>
        <div className=" w-full text-center">
          <div className="block lg:text-3xl md:text-xl text-[10px]">
          <span className="px-2">I <i>design</i> and develop </span>
          <span className="absolute text-blue-500 font-bold"><Msg /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
