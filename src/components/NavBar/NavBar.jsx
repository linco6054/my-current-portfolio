import React, { useState } from "react";
import "./NavBar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { Link } from "react-scroll";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Kantet's Logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    onClick={() => setToggle(false)}
                    activeClass="activeClass"
                    spy={true}
                    to={item}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
