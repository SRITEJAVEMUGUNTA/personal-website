import python from "../assets/img/languages/python.png";
import java from "../assets/img/languages/java.png";
import cpp from "../assets/img/languages/cpp.png";
import sharp from "../assets/img/languages/sharp.png";
import js from "../assets/img/languages/js.png";
import html from "../assets/img/languages/html.png";
import css from "../assets/img/languages/css.png";
import sql from "../assets/img/languages/sql.png";
import swift from "../assets/img/languages/swift.png";
import matlab from "../assets/img/languages/matlab.png";

import react from "../assets/img/frameworks/react.png";
import node from "../assets/img/frameworks/node.png";
import express from "../assets/img/frameworks/express.png";
import flask from "../assets/img/frameworks/flask.png";
import kubernetes from "../assets/img/frameworks/kubernetes.png";
import redux from "../assets/img/frameworks/redux.png";
import graph from "../assets/img/frameworks/graph.png";
import mongoose from "../assets/img/frameworks/mongoose.png";
import angular from "../assets/img/frameworks/angular.png";
import numpy from "../assets/img/frameworks/numpy.png";
import pandas from "../assets/img/frameworks/pandas.png";
import vue from "../assets/img/frameworks/vue.png";

import mongo from "../assets/img/databases/mongo.png";
import mySQL from "../assets/img/databases/mySQL.png";
import server from "../assets/img/databases/server.png";
import fire from "../assets/img/databases/fire.png";
import git from "../assets/img/databases/git.png";
import cloud from "../assets/img/databases/cloud.png";
import azure from "../assets/img/databases/azure.png";
import aws from "../assets/img/databases/aws.png";
import oracle from "../assets/img/databases/oracle.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Here Are My Skills as a Software Developer!</h2>
              <h3>Languages</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={python} alt="Image1" />
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <img src={java} alt="Image2" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="Image3" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={sharp} alt="Image4" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image5" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image6" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image7" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image8" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={swift} alt="Image9" />
                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <img src={matlab} alt="Image10" />
                  <h5>MatLab</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h3>Frameworks\Libraries</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image11" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image12" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image13" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={flask} alt="Image14" />
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <img src={kubernetes} alt="Image15" />
                  <h5>Kubernetes</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image16" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={mongoose} alt="Image17" />
                  <h5>Mongoose</h5>
                </div>
                <div className="item">
                  <img src={graph} alt="Image18" />
                  <h5>GraphQL</h5>
                </div>
                <div className="item">
                  <img src={angular} alt="Image19" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="Image20" />
                  <h5>Vue.js</h5>
                </div>
                <div className="item">
                  <img src={numpy} alt="Image21" />
                  <h5>NumPy</h5>
                </div>
                <div className="item">
                  <img src={pandas} alt="Image22" />
                  <h5>pandas</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h3>Databases/Developer Tools</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={mongo} alt="Image23" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mySQL} alt="Image24" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={server} alt="Image25" />
                  <h5>Microsoft SQL Server</h5>
                </div>
                <div className="item">
                  <img src={fire} alt="Image26" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image27" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={cloud} alt="Image28" />
                  <h5>Google Cloud</h5>
                </div>
                <div className="item">
                  <img src={azure} alt="Image29" />
                  <h5>Microsoft Azure</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="Image30" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={oracle} alt="Image31" />
                  <h5>Oracle Cloud</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image32" />
    </section>
  );
};
