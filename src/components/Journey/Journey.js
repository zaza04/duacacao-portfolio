// BOOSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// SCSS
import "../../assets/scss/Journey/Journey.scss";
// ICON
import { SlGraduation } from "react-icons/sl";
// IMAGES

function Journey() {
  return (
    <>
      <section id="journey" className="journey section">
        <Container>
          <div className="journey__box">
            <Row>
              <Col lg={12}>
                <h1 className="journey__title">Take a look at my journey</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={12}>
                <div className='journey__timeline timeline'>
                  <div className='timeline__item'>
                    <div className='timeline__icon'>
                      <SlGraduation />
                    </div>
                    <div className='timeline__description'>
                      <h3 className='timeline__name'>
                        Van Hien University
                      </h3>
                      <ul className='timeline__text'>
                        <li className="item">Specialization:</li>
                        <li className="item">● Software Engineering</li>
                        <li className="item">● Algorithms & Data Structure</li>
                        <li className="item">● Networking Security</li>
                        <li className="item">● Web Design</li>
                      </ul>
                    </div>
                    <p className='timeline__date'>
                      09/2022 - Present
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Journey;