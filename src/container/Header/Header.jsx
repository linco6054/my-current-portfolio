import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrapp } from "../../wrapper";

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>

            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Kantet</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Front-end</p>
            <p className="p-text">Back-end</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], delayChildren: 0.5 }}
        transition={{ duration: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile image" />
        <motion.img
          whileInView={{ scale: [0, 1], delayChildren: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        vatiant={scaleVeriance}
        whileInView={scaleVeriance.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.nodejs].map((circle, i) => (
          <div className="circle-cmp app__flex" key={i}>
            <img src={circle} alt="stacks" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrapp(Header, "Home");
const scaleVeriance = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
