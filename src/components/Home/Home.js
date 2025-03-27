// BOOSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// SCSS
import "../../assets/scss/Home/Home.scss";
// LOGO
import logo from "../../assets/images/teddy.png";
// ICON
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <section id="home" className="home section">
        <Container>
          <Row className="justify-content-center">
            <Col xl={12} lg={12}>
              <div className="home__box">
                <div className="home__logo">
                  <img src={logo} alt="logo"/>
                </div>
                <h1 className="home__greeting">
                  Ayyo wassup man! I'm Duacacao
                </h1>
                <p className="home__sub">
                  I'm a Front-End Developer
                </p>
                <ul className="social social__list">
                  <li className="social__item">
                    <a href="https://github.com/zaza04" target="blank">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="https://www.facebook.com/tienphonq18" target="blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="https://www.instagram.com/tfong.18" target="blank">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="social__item">
                    <a href="https://www.linkedin.com/in/duacacao" target="blank">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
                <a className="home__contact" href="https://drive.google.com/file/d/1fbZBrx77TxaGkEjpcxyR4q2RYxjsNJL9/view?usp=drive_link" target="_blank">
                  This is my CV
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home;