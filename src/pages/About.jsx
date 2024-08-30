import ProgressBar from "@ramonak/react-progress-bar";
import profileImg from "../images/profile2.jpg";
import certificateImg from "../images/Certificate.jpg";
import { interest, knowledge, myProfile, mySkill, otherSkill } from "./pages";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimate } from "./pages";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="visible"
      className="pt-32 pb-20 lg:px-10  dark:text-neutral-300"
    >
      <span className="dark:bg-gray-800 dark:text-neutral-400 bg-slate-300 px-3 py-2 text-sm text-neutral-700">
        ABOUT
      </span>
      <h3 className="my-10 text-4xl font-semibold dark:text-neutral-300  text-neutral-700">
        About Me
      </h3>
      <img
        src={profileImg}
        className="h-[70%] md:h-[45rem] lg:h-[49rem] max-w-full w-[100%] img-pos rounded-xl"
        alt="profile"
      />
      <div className="mt-10 sm:mt-16 border-b dark:border-gray-100 border-gray-200 pb-7 sm:pb-10">
        <h3 className=" text-3xl font-semibold dark:text-gray-300 text-neutral-700">
          Ojoade Ayowole
        </h3>
        <p className="text-lg  dark:text-gray-300 text-neutral-700">
          Web developer
        </p>
      </div>
      <div className="space-y-5 dark:text-gray-300 text-neutral-600 border-b dark:border-gray-100 border-gray-200 py-10 ">
        <p className=" leading-7">
          Hello, I&apos;m Ojoade Ayowole, a passionate front-end and web
          developer with a deep-rooted connection to the digital world. My
          journey in web development began years ago, and I&apos;ve dedicated
          countless hours to crafting, coding, and nurturing websites.
        </p>
        <p className=" leading-7">
          My forte lies in transforming embryonic ideas into fully-fledged
          digital landscapes. I&apos;m not just a developer; I&apos;m an
          architect of unique, cutting-edge websites that exude contemporary
          appeal. My expertise in web mechanics allows me to seamlessly
          integrate complex features, ensuring they operate autonomously with
          minimal maintenance, standing the test of time.
        </p>
      </div>
      <div className="py-10 sm:py-16 flex md:flex-row flex-col border-b dark:border-gray-100 border-gray-200">
        <ul className="flex-1 space-y-3">
          {myProfile
            .filter((_, i) => i < 3)
            .map((profile, i) => {
              return (
                <li key={i}>
                  <span className="text-lg font-semibold ">{profile[0]}</span> :{" "}
                  {profile[0] === "Email" ? (
                    <a
                      className="text-neutral-600 dark:text-neutral-300"
                      href="mailto:ayoojoade@gmail.com"
                    >
                      {profile[1]}
                    </a>
                  ) : profile[0] === "Phone" ? (
                    <a
                      className="text-neutral-600 dark:text-neutral-300"
                      href="tel:+2349048001687"
                    >
                      {profile[1]}
                    </a>
                  ) : (
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {profile[1]}
                    </span>
                  )}
                </li>
              );
            })}
        </ul>
        <ul className="flex-1 space-y-3 lg:mt-0 mt-3">
          {myProfile
            .filter((_, i) => i > 3)
            .map((profile, i) => {
              return (
                <li key={i}>
                  <span className="text-lg font-semibold">{profile[0]}</span> :{" "}
                  <span className="text-neutral-600 dark:text-neutral-300">
                    {profile[1]}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="mt-10 mb-20 lg:mb-32 pb-5">
        <button className="bg-black dark:bg-gray-300 dark:text-slate-900 text-gray-300 px-10 lg:hover:px-12 duration-300 py-4 text-lg">
          Download CV
        </button>
      </div>
      <div className="py-10 dark:bg-[#192336] bg-white px-5 sm:px-10 mb-20">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 space-y-16">
            <h2 className=" text-2xl font-semibold">Programming Skill</h2>
            <ul className="space-y-5">
              {mySkill.map((skill) => {
                return (
                  <li key={skill[0]} className="space-y-2 w-[90%]">
                    <p className="flex justify-between italic">
                      <span>{skill[0]}</span>
                      <span className="font-medium">{skill[1]}%</span>
                    </p>
                    <ProgressBar
                      completed={skill[1]}
                      isLabelVisible={false}
                      baseBgColor="#888A85"
                      bgColor="#2E3436"
                      height="5px"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 space-y-16 ">
            <h2 className=" text-2xl font-semibold lg:mt-0 mt-10">
              Other Skills
            </h2>
            <ul className="space-y-5">
              {otherSkill.map((skill) => {
                return (
                  <li key={skill[0]} className="space-y-2 w-[90%]">
                    <p className="flex justify-between italic">
                      <span>{skill[0]}</span>
                      <span className="font-medium">{skill[1]}%</span>
                    </p>
                    <ProgressBar
                      completed={skill[1]}
                      isLabelVisible={false}
                      baseBgColor="#888A85"
                      bgColor="#2E3436"
                      height="5px"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 sm:px-10 mb-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 space-y-10">
            <h2 className=" text-2xl font-semibold">Knowledge</h2>
            <ul className="space-y-5">
              {knowledge.map((skill) => {
                return (
                  <li
                    key={skill}
                    className=" list-disc text-neutral-600 dark:text-gray-300 w-[90%]"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 space-y-10 ">
            <h2 className=" text-2xl font-semibold lg:mt-0 mt-10">Interest</h2>
            <ul className="space-y-5">
              {interest.map((skill) => {
                return (
                  <li
                    key={skill[0]}
                    className=" list-disc text-neutral-600 dark:text-gray-300 w-[90%]"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-6 ">
        <h2 className="text-3xl sm:text-5xl  text-center font-semibold text-gray-800 dark:text-gray-300 ">
          Certificate
        </h2>
        <p className="text-center text-neutral-600 dark:text-gray-300 ">
          With this certification, I&apos;ve demonstrated my proficiency in
          using front-end frameworks such as React. I can efficiently build
          single-page applications and complex user interfaces, providing users
          with seamless interactions.
        </p>
        <div className="pt-12">
          <img
            src={certificateImg}
            alt="certificate"
            className=" max-w-full "
          />
        </div>
      </div>
    </motion.div>
  );
};
export default About;
