import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Inf from "../../img/hamza4.png"
import Digital from "../../img/hamza3.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Hamzz from "../../img/hamza8.jpeg"



const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Nos  </span>
        <span>services</span>
        <spane>
          L'ISTA de Safi offre divers services aux étudiants,<br /> y compris des conseils académiques, des ressources en ligne, un soutien technique, des activités parascolaires <br />et des opportunités de réseautage professionnel.
          L'institut valorise également l'inclusion et l'équité en offrant un soutien <br /> adapté aux besoins spécifiques des étudiants         </spane>
        <a href={Hamzz} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Inf}
            heading={"Infratructure Digitale"}
            detail={"Development , Sécuriter , Réseaux"}
            lin={
              <a href={Hamzz} download>
                <button className="button s-button">Infratructure</button>
              </a>
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Digital}
            heading={"Development Digitale"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            lin={<a href={Hamzz} download>
              <button className="button s-button">Development</button>
            </a>}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
