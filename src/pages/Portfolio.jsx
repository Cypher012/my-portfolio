import { Link } from "react-router-dom";
import { myPortfolio } from "./pages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimate } from "./pages";

const Portfolio = () => {
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
      <span className="dark:bg-gray-800 dark:text-neutral-400 bg-slate-300 px-3 py-2 text-sm text-neutral-700 uppercase">
        Portfolio
      </span>
      <h3 className="my-10 text-5xl font-semibold dark:text-neutral-300  text-neutral-700">
        My Portfolio
      </h3>
      <ResponsiveMasonry columnsCountBreakPoints={{ 640: 1, 768: 2, 1024: 3 }}>
        <Masonry gutter="20px">
          {myPortfolio.map((site) => {
            return (
              <Link key={site.id} to={site.link}>
                <figure className=" space-y-5 overflow-hidden rounded-lg shadow-xl lg:hover:scale-105 lg:duration-300">
                  <img
                    src={site.image}
                    alt={site.projectName}
                    className=" object-cover h-56 w-full"
                  />
                  <figcaption className="space-y-4 px-3">
                    <h3 className="text-xl font-medium">{site.projectName}</h3>
                    <p className="text-[15px] text-neutral-600 dark:text-gray-400 leading-[1.5rem]">
                      {site.description}
                    </p>
                    <div className="pb-3 flex gap-x-3 gap-y-2 flex-wrap text-sm">
                      {site["programming language"].map((lang, i) => {
                        return (
                          <span
                            key={i}
                            className={`${
                              lang === "HTML"
                                ? "bg-red-500"
                                : lang === "CSS"
                                ? "bg-blue-500"
                                : lang === "Javascript"
                                ? "bg-yellow-500"
                                : lang === "Sass"
                                ? " bg-pink-800"
                                : lang === "Bootstrap"
                                ? "bg-violet-900"
                                : lang === "Tailwind"
                                ? "bg-sky-600"
                                : lang === "React"
                                ? " bg-cyan-700"
                                : lang === "React Bootstrap"
                                ? " bg-purple-600"
                                : lang === "Material UI"
                                ? "bg-indigo-600"
                                : ""
                            } text-gray-100 px-2 py-1 rounded-lg`}
                          >
                            {lang}
                          </span>
                        );
                      })}
                    </div>
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </motion.div>
  );
};

export default Portfolio;
