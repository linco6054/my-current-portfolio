import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";
import { client, urlFor } from "../../client";
import { AppWrapp, MotionWrap } from "../../wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);
  console.log(abouts);
  useEffect(() => {
    const query = `*[_type =="abouts"]`;
    getData(query);
  }, []);
  const getData = async (query) => {
    const data = await client.fetch(query);
    setAbouts(data);
    console.log(urlFor(data[1].imgUrl).url());
  };

  return (
    <section name="About" className="">
      <h2 className="head-text">
        I know that <span>Good Code </span> <br /> means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts?.map((about, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "tween" }}
            className="app__profiles-item"
            key={i}
          >
            <img
              src={about?.image ? urlFor(about?.imgUrl).url() : images.about01}
              alt={about.title}
            />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AppWrapp(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);








