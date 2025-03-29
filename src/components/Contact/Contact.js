// BOOSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// SCSS
import "../../assets/scss/Contact/Contact.scss";

function Contact() {
  return (
    <>
      <section id="contact" className="contact section">
        <Container>
          <Row>
            <Col>
              <h1 className="section__title">Feel free to contact</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <h3 className="contact__sub">Let's talk about everything!</h3>
            </Col>
            <Col lg={7}>
              <p className="contact__detail">I'm mainly around on LinkedIn, Discord, GitHub and Facebook. But you can also catch me if you want to connect!</p>
              <a href="#home" className="contact__social">Feel free to connect with me!</a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact;