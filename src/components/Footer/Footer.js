// BOOSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// SCSS
import "../../assets/scss/Footer/Footer.scss";

function Footer() {
  return (
    <>
      <section id="footer" className="footer section">
        <Container>
          <Row>
            <Col>
              <div className="seperated"></div>
              <a className="icon" href="https://github.com/zaza04" target="_blank"><i className="devicon-github-original colored"></i></a>
              <p className="version">v1.0</p>
              <p className="footer__text">
                Built by Nguyen Tien Phong with ReactJS and JavaScript.
                <br/>
                Copyright © 2025 All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer;