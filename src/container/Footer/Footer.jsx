import React, { useState, useEffect } from "react";

import { images } from "../../constants";
import { AppWrapp, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubMitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: formData?.name,
      email: formData?.email,
      message: formData?.message,
    };
    client
      .create(contact)
      .then((res) => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {});
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images?.email} alt="email" />
          <a href="mailto:lincoln.kantet@gmail.com" className="p-text">
            lincoln.kantet@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images?.mobile} alt="email" />
          <a href="tel:+254791070041" className="p-text">
            +254 791 070 041
          </a>
        </div>
      </div>
      {!isFormSubMitted ? (
        <form className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              value={formData?.name}
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Your Name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              value={formData?.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              name="message"
              onChange={(e) => handleChange(e)}
              value={formData?.message}
            />
          </div>
          <button
            type="button"
            className="p-text"
            onClick={() => handleSubmit()}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapp(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
