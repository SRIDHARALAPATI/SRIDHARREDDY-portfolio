import React from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container"
import { Parallax } from "react-parallax";
import MyNavbar from "./components/mynavbar/mynavbar.Component";
 import MyCarousel from "./components/mycarousel/mycarousel.component";
 import Skills from "./Pages/skills/skills-component";
 import TitleMessage from "./components/title-message/title-message.component"
 import About from "./Pages/about/about.component";
 import Contact from "./Pages/Contact/contact-component";
 import Internship from "./Pages/Internships/internships-component";
 import Footer from "./Pages/Footer/footer-component";

import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyNavbar/>
    <MyCarousel/>
    <TitleMessage/>
    <div>
    <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/p_background.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
    </div>
    <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
            <hr />
              <Fade duration={500}>
                <Internship/>
              </Fade>
            </Container>
          </div>
        </Parallax>
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Contact/>
        </Slide>
      </Container>
      <hr/>
      <Footer/>
        

      
    

    </div>
  );
}

export default App;
