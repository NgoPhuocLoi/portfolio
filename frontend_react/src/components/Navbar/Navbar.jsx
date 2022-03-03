import React from "react";
import "./Navbar.scss";
import images from "../../constants/images";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleCloseMenu = () => {
      setToggle(false)
  }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonials","contact"].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <a href={`#${item}`}>{item}</a>
            <div />
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
            <HiX onClick={handleCloseMenu} />
            <ul>
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li key={item} >
                    <a href={`#${item}`} onClick={handleCloseMenu}>{item}</a>
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
