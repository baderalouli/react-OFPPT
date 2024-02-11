import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import boy from "../../img/hamza1.png";
import thumbup from "../../img/thumbup.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import OFPPT from "../../img/hamza2.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <img className="AAA" src={OFPPT} alt="" />
          <span style={{ color: darkMode ? "white" : "" }}>Welcom to OFPPT</span>
          <span>ista-ntic-safi</span>
          <span>
            L'ISTA de Safi au Maroc offre des programmes en technologies appliquées et en management. Son objectif est de préparer les étudiants à réussir sur le marché du travail grâce à des cours théoriques et pratiques, ainsi qu'à des stages en entreprise
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact</button>
        </Link>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={boy} alt="" />


        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "-17rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "green",
            top: "14rem",
            width: "21rem",
            height: "11rem",
            left: "17rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
