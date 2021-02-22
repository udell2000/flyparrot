import React from "react";
import "./wheel.css";

import tropicalGlory from "./img/Tropical Glory.png";
import tropicalGloryPrint from "./img/Tropical Glory print.png";
import eye from "./img/eye.png";

export default function Wheel() {
  return (
    <div className="carousel_wrapper">
      <div className="carousel">
        <div className="slide one">
          <img
            src="https://img1.wsimg.com/isteam/ip/3bf2a4b5-a435-4c8e-a2e1-3542ac014df1/Gold%20Vison-pants-0001.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
            alt="#"
          />
        </div>
        <div className="slide two">
          <img src={tropicalGlory} alt="tripical glory" />
        </div>
        <div className="slide three">
          <img src={tropicalGloryPrint} alt="tropical glory print" />
        </div>
        <div className="slide four">
          <img src={eye} alt="eye" />
        </div>
        <div className="slide five">
          <img
            src="https://img1.wsimg.com/isteam/ip/3bf2a4b5-a435-4c8e-a2e1-3542ac014df1/IMG_20210119_190307_506.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
            alt="eye"
          />
        </div>
        <div className="slide six">
          <img
            src="https://img1.wsimg.com/isteam/ip/3bf2a4b5-a435-4c8e-a2e1-3542ac014df1/IMG_20210119_190307_537.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
            alt="eye"
          />
        </div>
        <div className="slide seven">
          <img
            src="https://img1.wsimg.com/isteam/ip/3bf2a4b5-a435-4c8e-a2e1-3542ac014df1/Feather%20background.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:500,cg:true/rs=w:1536"
            alt="eye"
          />
        </div>
        <div className="slide eight">
          <img
            src="https://img1.wsimg.com/isteam/ip/3bf2a4b5-a435-4c8e-a2e1-3542ac014df1/IMG_20210119_185942_962-0001.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
            alt="eye"
          />
        </div>
        <div className="slide nine">
          <img
            src="https://img1.wsimg.com/isteam/ip/3bf2a4b5-a435-4c8e-a2e1-3542ac014df1/IMG_20210119_185802_778-0001.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
            alt="eye"
          />
        </div>
      </div>
    </div>
  );
}
