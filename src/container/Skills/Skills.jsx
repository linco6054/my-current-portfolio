import React, { useState, useEffect } from "react";
import { AppWrapp, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { client, urlFor } from "../../client";
import "./Skills.scss";

function Skills() {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client
      .fetch(query)
      .then((data) => {
        setExperience(data);
      })
      .catch((err) => console.log(err));
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className="app__skills">
      <h2 className="head-text">
        Skills & <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill?.name}
            >
              <div
                className="app__flex "
                style={{ backgroundColor: skill?.bgColr }}
              >
                <img src={urlFor(skill?.icon).url()} alt={skill?.name} />
              </div>
              <p className="p-text">{skill?.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work?.name}
                      key={work?.name}
                    >
                      <h4 className="bold-text">{work?.name}</h4>
                      <p className="p-text">{work?.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work?.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work?.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AppWrapp(Skills, "Skills");
