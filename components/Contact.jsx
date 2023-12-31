"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { contact } from "@/constant";
import axios from "axios";
import Alert from "./Alert";
import StarsCanvas from "./StarBackground";

const Contact = ({ dot, border }) => {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", body: "" });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://ritik-jaiswal.vercel.app/api/contact",
        formData
      );
      setSuccess("success");
    } catch (error) {
      setSuccess("failed");
    }
    setFormData({ name: "", email: "", body: "" });
  };
  return (
    <div
      id="contact"
      className="h-full w-full md:flex md:px-20 xl:px-72 relative  py-20"
    >
      {success === "success" ? (
        <Alert logo={"success"} message={"Succesful"} />
      ) : success === "failed" ? (
        <Alert logo={"failed"} message={"Failed"} />
      ) : (
        ""
      )}
      <div className="md:w-[50%] w-full">
        <div className="text-2xl flex items-center justify-center w-full ">
          Find me on
        </div>
        <hr className="mx-2" />
        <div className="p-7 flex gap-5 flex-wrap mr-4 w-full h-full items-center justify-center">
          {contact.map((logo) => {
            return (
              <motion.div
                key={logo.number}
                whileHover={{ scale: 1.2 }}
                className=" text-blue-600 cursor-none my-2 flex items-center justify-center gap-2 "
                onClick={() => {
                  window.open(logo.link);
                }}
                onMouseEnter={() => {
                  border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
                onMouseLeave={() => {
                  border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
              >
                <Image src={logo.logo} alt="l" className="h-7 w-7 flex" />
                <span className="text-2xl font-extrabold font-mono">
                  {logo.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="md:w-[50%] w-full">
        <div className="text-2xl  flex item-end justify-center ">
          Get In Touch
        </div>
        <hr className="mx-2" />
        <form action="" className="p-7 gap-5 flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            className="p-2 cursor-none bg-transparent border-blue-500 border-b-2 outline-none w-full"
            onChange={handleChange}
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            className="p-2 cursor-none bg-transparent border-blue-500 border-b-2 outline-none w-full"
            onChange={handleChange}
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          />
          <textarea
            type="text"
            name="body"
            value={formData.body}
            placeholder="Message"
            className="p-2 cursor-none bg-transparent border-blue-500 border-b-2 outline-none w-full"
            onChange={handleChange}
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            onClick={handleSubmit}
            className="w-full flex items-center justify-center bg-blue-400 p-2 rounded-3xl mt-5"
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
