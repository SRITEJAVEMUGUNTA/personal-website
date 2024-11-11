import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import blog from "../assets/img/projects/blog.png";
import hear from "../assets/img/projects/hear.png";
import ML from "../assets/img/projects/ML.png";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of the projects I've worked on!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <ProjectCard
                            key={1}
                            title="ML Visualization Tool"
                            imgUrl={ML}
                            alt="ML"
                          >
                            Skills: Python, Flask, Javascript, Chart.js, AWS
                          </ProjectCard>
                        </div>
                        <p>
                          This visualization suite aims to shift the common
                          perception of machine learning algorithms as
                          mysterious "black boxes." Users can explore Linear
                          Regression, Logistic Regression, and K-Means
                          Clustering, observing how each algorithm processes and
                          adapts to the data with every iteration. By placing
                          points on the graph and clicking the iterate button,
                          users can see that these algorithms are not as complex
                          as they may seem, but rather are built on elegant
                          mathematical principles and human creativity.
                        </p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <ProjectCard
                            key={2}
                            title="Thoughtify"
                            imgUrl={blog}
                            alt="blog"
                          >
                            Skills: React.js, Node.js, Express.js, MongoDB,
                            Postman
                          </ProjectCard>
                        </div>
                        <p>
                          This web application is a personal blogging platform
                          where users can capture and share their thoughts.
                          Users can create accounts to store, organize, and
                          display their blog posts, making it easy to revisit
                          and build on their ideas over time. Each individual's
                          posts are securely saved and categorized by topic,
                          allowing for a streamlined browsing experience. With a
                          simple and user-friendly interface, this application
                          provides an accessible space for users to document
                          their reflections, thoughts, and insights in one
                          convenient place.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <ProjectCard
                            key={1}
                            title="Hear-2-See"
                            imgUrl={hear}
                            alt="hear"
                          >
                            Skills: Python, Microsoft Azure, Google Cloud,
                            OpenAI, Streamlit
                          </ProjectCard>
                        </div>
                        <p>
                          Hear-2-See is an innovative app that bridges the gap
                          between visual and auditory information, using image
                          recognition and audio synthesis to help users better
                          understand their surroundings. By capturing real-time
                          photos or uploading images from a personal collection,
                          users can receive instant, detailed descriptions
                          processed through Google Cloud Vision and Azure
                          Computer Vision, with added refinement from OpenAI’s
                          language model for clarity. These descriptions are
                          then converted to audio using Google Text-to-Speech,
                          allowing users—especially those with visual
                          impairments—to comprehend their environment through
                          sound, making everyday navigation more intuitive and
                          accessible.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bkg-image"
      ></img>
    </section>
  );
};
