"use client";
import Image from "next/image";
import React from "react";
import frontend from "../public/image/frontend.jpg";
import { project } from "@/constant";
import Link from "next/link";
import { motion } from "framer-motion";
import github from "../public/svg/github.svg";
import StarsCanvas from "./StarBackground";
import axios from "axios";

const Work = ({ dot, border }) => {

  const handleProjectVisit = async (name) => {
    const project = await axios.get(`/api/projectVisit/${name}`)
    const id = project.data._id
    const pro_name = project.data.ProjectName
    const count = project.data.projectVisit + 1

    await axios.put(`/api/projectVisit/${id}`, {count: count})
  }
  return (
    <div
      id="work"
      className="h-full px-2 md:px-20 pt-20 xl:px-72 w-full relative"
    >
      <div className="flex justify-center items-center text-2xl md:text-4xl pb-16">
        My Projects
      </div>
      <hr className="p-2" />
      <div className=" flex-col gap-16 sm:flex hidden">
        {project.map((pro) => {
          return (
            <div key={pro.number}>
              <div className="flex w-full h-[300px] glass ">
                <div className="w-[60%]  p-10 relative rounded-lg">
                  <div className="text-xl font-bold pb-5">{pro.name}</div>
                  <div className="overflow-hidden h-[140px] font-mono">
                    {pro.description}
                  </div>
                  <div className="absolute bottom-5 flex gap-3 items-center justify-center">
                    <motion.a
                      href={pro.link}
                      onClick={() => handleProjectVisit(pro.name)}
                      className="py-2 px-4 gap-3 bg-blue-500 rounded-2xl flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 4px 8px rgba(0, 0, 139, 0.5)",
                      }}
                      onMouseEnter={() => {
                        border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                      }}
                      onMouseLeave={() => {
                        border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                      }}
                    >
                      <span>Live</span> <span className="live-icon"></span>
                    </motion.a>

                    <motion.div
                      className="bg-white rounded-full"
                      whileHover={{ scale: 1.3 }}
                      onMouseEnter={() => {
                        border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                      }}
                      onMouseLeave={() => {
                        border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                      }}
                    >
                      <Link href={pro.github}>
                        <Image src={github} alt="" width={30} height={30} />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                <div className="w-[40%]  relative">
                  <Image
                    src={pro.image}
                    alt=""
                    className="absolute -left-5 top-5 h-[87%] bottom-5 "
                  />
                  <div className="-bottom-5 absolute flex gap-2">
                    {pro.tech.map((tech) => {
                      return (
                        <div key={tech.number} className="rounded-lg">
                          <Image
                            src={tech.logo}
                            alt=""
                            width={25}
                            height={10}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sm:hidden w-full flex flex-col justify-center gap-10 px-5">
        {project.map((pro) => {
          return (
            <div key={pro.number} className="container p-5 rounded-lg">
              <Image src={pro.image} alt="" />
              <div className="w-full flex justify-end gap-2 py-2">
                {pro.tech.map((tech) => {
                  return (
                    <Image
                      key={tech.number}
                      src={tech.logo}
                      alt=""
                      width={30}
                      height={30}
                    />
                  );
                })}
              </div>
              <div>
                <h1 className="py-3 font-bold ">{pro.name}</h1>
                <p className="font-mono">{pro.description}</p>
              </div>
              <div className="pt-10 flex items-center gap-3">
                <motion.a
                  href={"/"}
                  className="py-2 px-4 gap-2 bg-blue-500 rounded-2xl flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 8px rgba(255, 0, 0, 0.5)",
                  }}
                  onMouseEnter={() => {
                    border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                  }}
                  onMouseLeave={() => {
                    border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                  }}
                >
                  <span>Live</span> <span className="live-icon"></span>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.3 }}
                  onMouseEnter={() => {
                    border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                  }}
                  onMouseLeave={() => {
                    border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                  }}
                >
                  <Link href={""}>
                    <Image src={github} alt="" width={30} height={30} />
                  </Link>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
