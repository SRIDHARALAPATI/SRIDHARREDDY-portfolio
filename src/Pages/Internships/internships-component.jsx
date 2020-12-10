import React from "react";
import {
  Timeline,
  Events,
  ImageEvent,
  themes,
  UrlButton,
  createTheme,
} from "@merc/react-timeline";
import "../Internships/internships-style.css";
import L_BOLO from "../../assets/img/Internships/Bolo.jpg";
import L_EDUREKA from "../../assets/img/Internships/Full stack.jpg";
import L_IRSC from "../../assets/img/Internships/IRSC.jpg";
import L_ZI from "../../assets/img/Internships/zersesy Infotech.jpg";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "rebeccapurple",
  },
  marker: {
    borderColor: "rebeccapurple",
  },
  timelineTrack: {
    backgroundColor: "rebeccapurple",
  },
});

const Internship = () => {
  return (
    <div className="pt-3 pb-3" id="Internships">
      <h1 className="text-center font-details pb-4">Internships</h1>
      <Timeline theme={customTheme}>
        <Events>
          <ImageEvent
            date="21/08/20"
            text="Full Stack Developer"
            src={L_EDUREKA}
            alt="FS"
          >
            <UrlButton
              href="https://github.com/SRIDHARALAPATI/MERN-stack"
              target="_blank"
            >
              Code
            </UrlButton>
          </ImageEvent>

          <ImageEvent
            date="22/08/19"
            text="Policy Internship at IRSC"
            src={L_IRSC}
            alt="IRSC"
          ></ImageEvent>
          <ImageEvent
            date="31/07/19"
            text="Digital Marketing"
            src={L_ZI}
            alt="ZI"
          ></ImageEvent>
          <ImageEvent
            date="06/07/19"
            text="Digital Marketing"
            src={L_BOLO}
            alt="Bolo"
          ></ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};
export default Internship;
