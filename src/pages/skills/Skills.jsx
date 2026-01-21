import html from "/images/HTML.svg";
import css from "/images/css.png";
import js from "/images/js.png";
import reactImg from "/images/React.svg";
import tailwind from "/images/tailwind.svg";
import bootstrap from "/images/Bootstrap.svg";
import jquery from "/images/jquery.svg";

import php from "/images/php.png";
import laravel from "/images/laravel.png";
import firebase from "/images/Firebase.png";
import mySQL from "/images/mysql.png";

import github from "/images/github.svg";
import npm from "/images/npmjs.svg";
import vite from "/images/Vitejs-logo.svg.png";

import mvc from "/images/mvc.png";
import oop from "/images/oop.webp";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const skills = [
  {
    title: "Frontend",
    data: [
      { name: "HTML", img: html, level: "Advanced" },
      { name: "CSS", img: css, level: "Advanced" },
      { name: "JavaScript", img: js, level: "Good" },
      { name: "React", img: reactImg, level: "Good" },
      { name: "Tailwind", img: tailwind, level: "Good" },
      { name: "Bootstrap", img: bootstrap, level: "Good" },
      { name: "jQuery", img: jquery, level: "Basic" },
    ],
  },
  {
    title: "Backend",
    data: [
      { name: "PHP", img: php, level: "Good" },
      { name: "laravel", img: laravel, level: "Good" },
      { name: "Firebase", img: firebase, level: "Good" },
      { name: "MySQL", img: mySQL, level: "Good" },
    ],
  },
  {
    title: "Tools",
    data: [
      { name: "GitHub", img: github, level: "Good" },
      { name: "npm", img: npm, level: "Good" },
      { name: "Vite", img: vite, level: "Good" },
    ],
  },
  {
    title: "Concepts",
    data: [
      { name: "OOP", img: oop, level: "Good" },
      { name: "MVC", img: mvc, level: "Good" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="cardo-regular-italic px-10 py-14 sm:px-20">
      <h2 className="mb-5 bg-gradient-to-r from-fuchsia-400 to-fuchsia-100 bg-clip-text text-2xl text-transparent sm:text-4xl">
        Skills:
      </h2>

      {skills.map((section, index) => (
        <motion.div
          key={index}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-10 mb-14" >
            
          <h3 className="mb-4 text-xl text-fuchsia-300">{section.title}:- </h3>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {section.data.map((skill, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur hover:shadow-lg hover:shadow-fuchsia-200">
                <img src={skill.img} alt={skill.name} className="h-20 w-20"/>
                
                <span className="font-semibold text-fuchsia-100">{skill.name}</span>
                <small className="text-sm font-semibold text-fuchsia-300">
                  ( {skill.level} )
                </small>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
