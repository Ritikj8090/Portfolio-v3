"use client"
import { about } from "@/constant";
import { motion } from "framer-motion";
import React, { useState } from "react";
import StarsCanvas from "./StarBackground";

const About = () => {
  const [mode, setMode] = useState("dark")
  return (
    <div id="about" className="h-full w-full flex px-3 md:px-20 xl:px-72 relative pt-20">
         <StarsCanvas />
      <div className="w-full dark rounded-lg relative z-[-10]">
        <div className="p-2 flex w-full justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full  bg-orange-600 flex"></span>
            <span className="h-3 w-3 rounded-full  bg-yellow-600 flex"></span>
            <span className="h-3 w-3 rounded-full  bg-green-600 flex"></span>
          </div>
          <span>about.js</span>
          <span></span>
        </div>
        <div className="gap-2  h-full px-8 py-16 relative">
          <div className="ease-in-out duration-1000  relative font-mono text-lg deactivate font-semibold ">
            <div className="bg-vscode">
              <span>01</span>
              <span className="ml-11 text-blue-600">class</span>{" "}
              <span className="text-yellow-400">RiTik Jaiswal</span>
            </div>
            <div className="flex bg-vscode">
              <span>02</span>
              <span className="ml-11">&nbsp;{" //"}I can, because I did.</span>
            </div>
            <div className="flex bg-vscode">
              <span>03</span>
              <span className="ml-11">
                &nbsp;{" //"} My vast variety of skills is continuously
                expanding.
              </span>
            </div>
            <div className="bg-vscode">
              <span>04</span>
              <span className="ml-11 text-blue-600">
                &nbsp; Constructor{" "}
                <span className="text-white">() {"\u007B"}</span>{" "}
              </span>
            </div>
            <div className="inline-flex bg-vscode">
              <span>05</span>
              <span className="ml-11 text-red-600">
                &nbsp; &nbsp; this
                <span className="text-white">.</span>
              </span>
              <span className="text-[#24e33a]">
                name{" "}
                <span className="text-red-500">
                  ={" "}
                  <span className="text-[#24e33a]">
                    &apos;RiTik Jaiswal&apos;
                  </span>
                </span>
              </span>
            </div>
            <div className="flex bg-vscode">
              <span>06</span>
              <span className="ml-11 text-red-600">
                &nbsp; &nbsp; this
                <span className="text-white">.</span>
              </span>
              <span className="text-[#24e33a]">
                Day Of Birth TimeStamp{" "}
                <span className="text-red-500">
                  = <span className="text-yellow-600">time</span>
                </span>
              </span>
            </div>
            <div className="flex bg-vscode">
              <span>07</span>
              <span className="ml-11 text-yellow-400">
                &nbsp; &nbsp; Work
              </span>{" "}
              <span className="text-white">() {"\u007B"}</span>
            </div>
            <div className="flex bg-vscode">
              <span>08</span>
              <span className="ml-11 text-blue-500">
                &nbsp; &nbsp; &nbsp; return&nbsp;
              </span>{" "}
              <span className="text-white">[</span>
            </div>
            <div className="flex bg-vscode">
              <span>09</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2020 - 2020&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  {" '"}InternPe - Web Developer&apos;
                </span>
                {"\u007D"},{" "}
              </span>
            </div>

            <div className="flex bg-vscode">
              <span>10</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp;&nbsp;&nbsp;{" ]"}
              </span>{" "}
            </div>
            <div>
              <span>11</span>
              <span className="ml-11 text-white">&nbsp; &nbsp;{" }"}</span>{" "}
            </div>
            <div></div>
            <div className="flex bg-vscode">
              <span>12</span>
              <span className="ml-11 text-yellow-400">
                &nbsp; &nbsp; Educaion
              </span>{" "}
              <span className="text-white">() {"\u007B"}</span>
            </div>
            <div className="flex bg-vscode">
              <span>13</span>
              <span className="ml-11 text-blue-500">
                &nbsp; &nbsp; &nbsp; return&nbsp;
              </span>{" "}
              <span className="text-white">[</span>
            </div>
            <div className="flex bg-vscode">
              <span>14</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2020 - 2024&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  {" '"}Inderprastha Engineering College - Bachelor Degree in
                  Computer Science&apos;
                </span>
                {"\u007D"},{" "}
              </span>
            </div>
            <div className="flex bg-vscode">
              <span>15</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2018 - 2019&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  &nbsp;&apos;St Xaiver&apos;s School Salempur Uttar
                  Pardesh&apos;
                </span>
                {"\u007D"},{" "}
              </span>
            </div>
            <div className="flex bg-vscode">
              <span>16</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">&apos;2016 - 2017&apos;</span>
                &nbsp;:
                <span className="text-[#24e33a]">
                  &nbsp;&apos;St Xaiver&apos;s School Salempur Uttar
                  Pardesh&apos;
                </span>
                {"\u007D"},
              </span>
            </div>
            <div className="flex bg-vscode">
              <span>17</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp;&nbsp;&nbsp;{" ]"}
              </span>{" "}
            </div>
            <div  className="bg-vscode">
              <span>18</span>
              <span className="ml-11 text-white">&nbsp; &nbsp;{" }"}</span>{" "}
            </div>
            <div  className="bg-vscode">
              <span>19</span>
              <span className="ml-11 text-yellow-400">
                &nbsp; &nbsp; Skills
              </span>{" "}
              <span className="text-white">() {"\u007B"}</span>
            </div>
            <div className="flex bg-vscode">
              <span>20</span>
              <span className="ml-11 text-blue-500">
                &nbsp; &nbsp; &nbsp; return&nbsp;
              </span>{" "}
              <span className="text-white">[</span>
            </div>
            <div className="flex bg-vscode">
              <span>21</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; {"\u007B"}
                <span className="text-[#24e33a]">
                  {"'"}HTML{"', '"}CSS{"', '"}Node.js{"', '"}React{"', '"}
                  Next.js{"', '"}TailwindCSS{"',"}
                </span>
              </span>
            </div>
            <div className="flex bg-vscode">
              <span>22</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span className="text-[#24e33a]">
                  {"'"}GIT{"', '"}JAVA{"', '"}C++
                  {"', '"}Python{"', '"}JavaScript{"', '"}Docker{"',"}Django
                  {"',"}
                </span>
                {"},"}
              </span>
            </div>
            <div className="flex">
              <span>&nbsp;&nbsp;</span>
              <span className="ml-11 text-white">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span className="text-[#24e33a]">
                  {"'"}MongoDB{"',"}
                  <div className="text-white inline-block cursor">
                    &nbsp;|&nbsp;
                  </div>
                </span>
                {"},"}
              </span>
            </div>
            <div className="flex bg-vscode">
              <span>23</span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
              <span className="text-white">{"]"}</span>
            </div>
            <div className="flex bg-vscode">
              <span>24</span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span className="text-white">{"}"}</span>
            </div>
            <div className="flex bg-vscode">
              <span>25</span>
              &nbsp; &nbsp; &nbsp; <span className="text-white">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
