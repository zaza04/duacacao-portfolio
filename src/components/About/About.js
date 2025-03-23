// BOOSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
// SCSS
import "../../assets/scss/About/About.scss";
// ASSETS
import gif from "../../assets/images/Gif.gif";

function About() {
  return (
    <>
    <section id="about" className="about section">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="about__title">Explore my story</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div className="about__content">
            <div className="about__text">
              <p>
                Hi there! I'm Tien Phong but you can also call me Phong, a web developer from Vietnam. This
                nickname is used on any social media platforms and in games.
                <br/> <br/>
                I'm currently studying Infomation Technology and will have hoped to graduate by the end
                of 2026. Besides, I'm really interested in the Design Website and Developer.
                Now, I'm self-studying and working to improve my programming skills with some helps
                from club members and experts at workshops held at my school.
                <br/> <br/>
                I'm currently study ultimate goal is to become Web Developer. 
                I'm actively learning these stuff on my own at workshops held at my school.
              </p>
            </div>
            <div className="about__gif">
              <img src={gif} alt="gif"/>
            </div>
          </div>
        </Row>
      </Container>
    </section>
    
    </>
  ) 
}

export default About;