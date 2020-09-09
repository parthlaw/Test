import React from "react";
import "./Home.css";
import Logo from "./pic1.png";
import Adv from "./pic2.png";
import websites from "./pic3.png";
const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="Galary" id="Galary"></div>
      <div className="HomeContent">
        <h1>FULL CREATIVE AND DESIGN SERVICES</h1>
      </div>
      <div className="HomeText">
        <div className="cont">
          <img src={Logo} alt="Logo" />
          <br />
          <h3>LOGOS</h3>
          <br />
          <p>
            We create effective business identity solutions that include all
            element to the brand design including logos, wordmarks and icons.{" "}
          </p>
        </div>
        <div className="cont1">
          <img src={Adv} alt="Adv" />
          <br />
          <h3>ADVERTISING</h3>
          <br />
          <p>
            We create effective attention getting commercials that engage
            current customer and get new ones. Television to non traditional
            stunts.{" "}
          </p>
        </div>
        <div className="cont1">
          <img src={websites} alt="web" />
          <br />
          <h3>WEBSITES</h3>
          <br />
          <p>
            Our highly skilled creative and development teams work together to
            create award winning interactive experiences.{" "}
          </p>
        </div>
        <div className="Main"></div>
      </div>
    </div>
  );
};
export default Home;
