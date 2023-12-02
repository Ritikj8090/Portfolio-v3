"use client";
import React, { useEffect, useState } from "react";
import success from "../public/svg/success.svg";
import failed from "../public/svg/failed.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Alert = ({logo, message}) => {
  const [isAnimating, setIsAnimating] = useState(true);
  

  const animate = () => {
    const timeoutId = setTimeout(() => {
      setIsAnimating(!isAnimating);
    }, 4000); // Set the delay in milliseconds (2 seconds in this example)
    console.log(isAnimating);
    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  };
  isAnimating ? animate() : "";

  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: isAnimating ? 0 : -150 }}
      className="fixed w-full z-40 top-5 left-0 justify-center flex"
    >
      <div className=" gap-2 w-fit flex items-center bg-gray-400 p-2 rounded-lg relative">
        <Image src={logo === "success" ? success : failed} alt="" width={30} height={30} />
        <span>{message}</span>
      </div>
    </motion.div>
  );
};

export default Alert;
