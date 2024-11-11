import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sriteja-vemugunta-a44a9a17b/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/SRITEJAVEMUGUNTA">
                <img src={navIcon2} alt="Icon2" />
              </a>
              <a href="mailto:svemugu@gmail.com">
                <FaEnvelope size={20} color="#fff" />{" "}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
