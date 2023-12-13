import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import medsharingImg from "@/public/medsharing.jpg";
import eCommerceImg from "@/public/e-commerce.jpg";
import adriverImg from "@/public/adriver.jpg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full-Stack Developer",
        location: "Paris",
        description:
            "Collaborated with a student team to develop a robust e-commerce web application during a comprehensive bootcamp. Leveraged Symfony and React to create a seamless user experience. Additionally, contributed to the enhancement of both client and admin platforms.",
        icon: React.createElement(FaReact),
        date: "janv. 2020",
    },
    {
        title: "Front-End Developer",
        location: "Paris",
        description:
            "Internship for a startup specializing in mobile advertising. I created showcase websites using Symfony, utilizing programming languages such as HTML, CSS, JS, PHP, and frameworks/libraries like Bootstrap, jQuery, and Node.js. I also assisted in the development of the client and admin platform under Symfony.",
        icon: React.createElement(CgWorkAlt),
        date: "Feb. 2020 - Jul. 2020",
    },
    {
        title: "Front-End Developer",
        location: "Fontenay-sous-Bois, Île-de-France, France (remote from Asia)",
        description:
            "I participated in the front-end development of a web application dedicated to the creation and management of clinical studies. The redesign was done using a proprietary framework. I actively collaborated with the team to ensure a smooth and efficient integration of technologies including HTML, CSS, Bootstrap, jQuery, JS, XML, ASP, and SQL Server.",
        icon: React.createElement(LuGraduationCap),
        date: "Sept. 2021 - Sept. 2023",
    },
] as const;

// export const projectsData = [
//     {
//         title: "Medsharing",
//         description:
//             "As a full-stack developer, I contributed to the Medsharing startup project for a duration of 2 years. The platform enables users to provide public feedback to companies.",
//         tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//         imageUrl: medsharingImg,
//     },
//     {
//         title: "Mobads",
//         description:
//             "I served as the front-end developer for Mobads, a job board focused on remote developer positions. My responsibilities included implementing features such as filtering, sorting, and pagination to enhance user experience.",
//         tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//         imageUrl: eCommerceImg,
//     },
//     {
//         title: "Adriver",
//         description:
//             "Developed a public web app named Adriver designed for quick text analytics. The application displays word count, character count, and social media post limits, offering valuable insights to users.",
//         tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//         imageUrl: adriverImg,
//     },
// ] as const;


export const projectsData = [
    {
        title: "Medsharing",
        description: "Front-end developer at Medsharing. Used HTML, CSS, Bootstrap, React (Next.js), TypeScript, Tailwind. Remote work from Asia.",
        tags: ["HTML5", "CSS3", "Bootstrap", "React.js", "Next.js", "TypeScript", "Tailwind", "Git"],
        imageUrl: medsharingImg,
    },
    {
        title: "Adriver France",
        description: "Web development intern at Adriver Group, Paris. Contributed using Symfony, HTML, CSS, JS, PHP, Bootstrap, jQuery, Node.js.",
        tags: ["HTML5", "CSS3", "Symfony", "PHP", "Bootstrap", "NPM", "Git"],
        imageUrl: adriverImg,
    },
    {
        title: "Full-Stack Developer",
        description: "Collaborated on e-commerce app. Used Symfony, React, HTML5, CSS3, PHP, Bootstrap, NPM, Git for seamless user experience.",
        tags: ["HTML5", "CSS3", "Symfony", "PHP", "Bootstrap", "NPM", "Git"],
        imageUrl: eCommerceImg,
    },
] as const;




export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Framer Motion",
    "Bootstrap",
    "mySQL",
    "Symfony",
    "Php",
    "Asp.net",
    "Figma",
] as const;