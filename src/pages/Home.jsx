import { useEffect } from "react";
import profileImg from "../images/profile2.jpg";
import { socialLinks } from "./pages";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { pageAnimate } from "./pages";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center h-full pt-36  "
    >
      <div className=" flex flex-col lg:flex-row gap-x-10 gap-y-10 lg:gap-y-0 mt-10 lg:mt-0 items-center dark:text-gray-300 w-[min(55rem,100%)]">
        <figure
          id="profile-img"
          className=" outline-8  lg:outline outline-gray-800 dark:outline-gray-500 w-[18rem] h-[18rem] sm:w-[35%] sm:h-[18rem]  lg:w-[50%] lg:h-[18rem]"
        >
          <img
            src={profileImg}
            alt="profile"
            className=" object-cover w-full h-full"
          />
        </figure>
        <article className="flex flex-col items-center lg:items-start gap-y-3 ">
          <h2 className="text-3xl md:text-5xl text-neutral-800 dark:text-gray-300 font-bold">
            Ojoade Ayowole
          </h2>
          <TypeAnimation
            sequence={[
              "Front end developer",
              1000,
              "Mobile App developer",
              1000,
              "Web developer",
              1000,
              "Web Instructor",
              1000,
            ]}
            wrapper="span"
            className="text-2xl sm:text-3xl dark:text-gray-300 font-medium text-neutral-800"
            speed={25}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <p className=" text-gray-600 dark:text-gray-400 lg:text-left text-center px-4 lg:px-0">
            I&apos;m a passionate web developer, based in Lagos but always ready
            to code my way through the digital landscape.
          </p>
          <div className="space-x-4 h-20 mt-2">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.icon}
                  href={social.link}
                  className="text-xl relative hover:bottom-1 duration-500"
                >
                  <i
                    className={`${social.icon} text-neutral-800 dark:text-gray-300 `}
                  ></i>
                </a>
              );
            })}
          </div>
        </article>
      </div>
    </motion.div>
  );
};
export default Home;
