import React from "react";
import "./styles.css";
import Wheel from "./components/wheel.js";

export default function App() {
  return (
    <div className="App">
      <div className="titleContainer">
        <h1>Fly Parrot Cullah Culture</h1>
        <h6>A LIFESTYLE THAT COMES WITH WINGS</h6>
      </div>
      <div className="mainPhotoDiv">
        <div className="mainPhotoDivLeft">
          <img
            src="https://img1.wsimg.com/isteam/ip/3bf2a4b5-a435-4c8e-a2e1-3542ac014df1/Gold%20Vison-pants-0001.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
            alt="none"
            name="one"
          />
        </div>
        <div className="mainPhotoDivRight" style={{ background: "none" }}>
          <h1>FIRST OFF, THANK YOU!</h1>
          <p>
            Fly parrot culllah culture was founded as the first ever fashionable
            custom designer t-shirt brand paying homage to a variety of amazing
            parrot species. The company's line of business includes men, women
            and kids custom designer clothing dedicated to building awareness,
            education as well as cutting edge designs.
          </p>
          <button>Find Out More</button>
        </div>
      </div>
      <div className="wheelContainer">
        <Wheel />
      </div>
      <div className="footer"></div>
    </div>
  );
}
