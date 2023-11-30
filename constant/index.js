import React from "react";
import html from "../public/svg/html.svg";
import css from "../public/svg/css.svg";
import javascript from "../public/svg/javascript.svg";
import nodejs from "../public/svg/nodejs.svg";
import react from "../public/svg/react.svg";
import nextjs from "../public/svg/nextjs.svg";
import mongodb from "../public/svg/mongodb.svg";
import ccc from "../public/svg/ccc.svg";
import java from "../public/svg/java.svg";
import python from "../public/svg/python.svg";
import vscode from "../public/svg/vscode.svg";
import git from "../public/svg/git.svg";
import linux from "../public/svg/linux.svg";
import mysql from "../public/svg/mysql.svg";
import tailwindcss from "../public/svg/tailwindcss.svg";
import api from "../public/svg/api.svg";
import express from "../public/svg/express.svg";
import jwt from "../public/svg/jwt.svg";
import frontend1 from "../public/image/frontend.jpg";
import movix from "../public/image/movix.jpeg";
import note from "../public/image/note.jpeg";
import portfolio from "../public/image/portfolio.jpeg";
import portfoliov1 from "../public/image/portfoliov1.jpeg";
import linkedin from "../public/svg/linkedin.svg";
import twitter from "../public/svg/twitter.svg";
import github from "../public/svg/github.svg";
import facebook from "../public/svg/facebook.svg";
import instagram from "../public/svg/instagram.svg";
import codechef1 from "../public/svg/codechef1.svg";
import codeforces1 from "../public/svg/Codeforces1.svg";
import leetcode1 from "../public/svg/leetcode1.svg";

export const navlinks = [
  {
    number: "01",
    name: "// Home",
    link: "#home",
  },
  {
    number: "02",
    name: "// Skill",
    link: "#skill",
  },
  {
    number: "03",
    name: "// Work",
    link: "#work",
  },
  {
    number: "04",
    name: "// About",
    link: "#about",
  },
  {
    number: "05",
    name: "// Contact",
    link: "#contact",
  },
];

export const frontend = [
  {
    name: "HTML",
    path: html,
    number: "1",
  },
  {
    name: "CSS",
    path: css,
    number: "2",
  },
  {
    name: "JAVASCRIPT",
    path: javascript,
    number: "3",
  },
  {
    name: "REACT",
    path: react,
    number: "4",
  },
  {
    name: "NEXTJS",
    path: nextjs,
    number: "5",
  },
];

export const backend = [
  {
    name: "MONGODB",
    path: mongodb,
    number: "1",
  },
  {
    name: "MYSQL",
    path: mysql,
    number: "2",
  },
  {
    name: "NODEJS",
    path: nodejs,
    number: "3",
  },
];

export const other = [
  {
    name: "C++",
    path: ccc,
    number: "1",
  },
  {
    name: "PYTHON",
    path: python,
    number: "2",
  },
  {
    name: "JAVA",
    path: java,
    number: "3",
  },
  {
    name: "VS CODE",
    path: vscode,
    number: "4",
  },
  {
    name: "GIT",
    path: git,
    number: "5",
  },
  {
    name: "LINUX",
    path: linux,
    number: "6",
  },
];

export const project = [
  {
    number: "01",
    name: "Portfolio v2",
    description:
      "Explore my personal portfolio website built with Next.js, MongoDB, and Express. Discover my projects, skills, and experiences showcased in a dynamic and responsive web application. Explore my work and get to know more about my journey in web development.",
    image: portfolio,
    tech: [{logo: nextjs, number: 1}, {logo: tailwindcss, number: 2}, {logo: mongodb, number: 3}, {logo: html, number: 4}, {logo: css, number: 5}],
    link: "https://portfoliov2-tawny.vercel.app/",
    github: "https://github.com/Ritikj8090/portfoliov2"
  },
  {
    number: "02",
    name: "Movix",
    description:
      "Discover the hottest cinematic and small-screen releases on our movie webpage. Stay up to date with the latest movies and TV shows, powered by the TMDB API. Dive into a world of entertainment, with trailers, ratings, and more at your fingertips.",
    image: movix,
    tech: [{logo: react, number: 1}, {logo: tailwindcss, number: 2}, {logo: api, number: 3}, {logo: html, number: 4}, {logo: css, number: 5}],
    link: "https://movix-omega-sandy.vercel.app/",
    github: "https://github.com/Ritikj8090/Movix"
  },
  {
    number: "03",
    name: "Notes",
    description:
      "A note-taking webpage built with React, Express, and MongoDB, enabling users to create, manage, and store notes seamlessly. Effortlessly organize thoughts, tasks, and ideas while benefiting from a robust, modern web application.",
    image: note,
    tech: [{logo: react, number: 1}, {logo: tailwindcss, number: 2}, {logo: mongodb, number: 3}, {logo: html, number: 4}, {logo: css, number: 5}, {logo: express, number: 6}, {logo: jwt, number: 7}],
    link: "https://portfolio-iota-amber-56.vercel.app/",
    github: "https://github.com/Ritikj8090/portfolio"
  },
  {
    number: "04",
    name: "Portfolio v1",
    description:
      "Explore my personal portfolio website built with Next.js, MongoDB, and Express. Discover my projects, skills, and experiences showcased in a dynamic and responsive web application. Explore my work and get to know more about my journey in web development.",
    image: portfoliov1,
    tech: [{logo: react, number: 1}, {logo: tailwindcss, number: 2}, {logo: html, number: 3}, {logo: css, number: 4}],
    link: "https://portfolio-iota-amber-56.vercel.app/",
    github: "https://github.com/Ritikj8090/portfolio"
  },
];

export const contact = [
  {
    "name": "LinkedIn",
    "number": 1,
    "logo": linkedin,
    "link": "https://www.linkedin.com/in/ritik-jaiswal-997214210",
  },
  {
    "name": "GitHub",
    "number": 2,
    "logo": github,
    "link": "https://github.com/Ritikj8090",
  },
  {
    "name": "Twitter",
    "number": 3,
    "logo": twitter,
    "link": "https://twitter.com/Ritikj713",
  },
  {
    "name": "Instagram",
    "number": 4,
    "logo": instagram,
    "link": "https://instagram.com/ritik_jaisz_rj?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D",
  },
  {
    "name": "Facebook",
    "number": 5,
    "logo": facebook,
    "link": "https://www.facebook.com/ritik.jaiswal.1217?mibextid=ZbWKwL",
  },
  {
    "name": "Codechef",
    "number": 6,
    "logo": codechef1,
    "link": "https://www.codechef.com/users/ritikj713",
  },
  {
    "name": "Codeforces",
    "number": 7,
    "logo": codeforces1,
    "link": "https://codeforces.com/profile/ritikj713",
  },
]
