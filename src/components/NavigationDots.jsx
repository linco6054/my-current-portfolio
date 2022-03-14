import React from "react";
import { Link } from "react-scroll";

export default function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonials", "Contact"].map(
        (item, i) => (
          <Link
            key={item + i}
            to={item}
            className="app__navigation-dot"
            style={
              active === item
                ? { backgroundColor: "#314BAC" }
                : {
                    backgroundColor: "",
                  }
            }
          />
        )
      )}
    </div>
  );
}
