import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa"; // Import an envelope icon from react-icons

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <a
              href="mailto:your-email@example.com"
              className="email-icon"
              aria-label="Email us"
            >
              <FaEnvelope size={30} color="#fff" />{" "}
              {/* Customize size and color */}
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
