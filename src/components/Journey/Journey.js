// BOOSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// SCSS
import "../../assets/scss/Journey/Journey.scss";
// ICON
// import { SlGraduation, SlBriefcase } from "react-icons/sl";
// DATA JSON
import experience from "../../data/experience.json";
// JOURNEY BOX
import JourneyBox from './JourneyBox/JourneyBox';

function Journey() {
  // console.log(experience);

  return (
    <>
      <section id="journey" className="journey section">
        <Container>
          <div className="journey__box">
            <Row>
              <Col lg={12}>
                <h1 className="section__title">Take a look at my journey</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={12}>
                <div className='journey__timeline timeline'>
                  <div className='journey__study'>
                    {(experience || []).filter((value) => value.experienceCategory === "Education")
                      .map((item) => (
                        <JourneyBox 
                          key = {item.experienceID}
                          icon = {item.experienceIcon}
                          name = {item.experienceTitle}
                          description = {item.experienceDescription}
                          date = {item.experienceYear}
                        />
                      ))
                    }
                  </div>
                  <div className='journey__work'>
                    {(experience || []).filter((value) => value.experienceCategory === "Work")
                      .map((item) => (
                        <JourneyBox 
                          key = {item.experienceID}
                          icon = {item.experienceIcon}
                          name = {item.experienceTitle}
                          description = {item.experienceDescription}
                          date = {item.experienceYear}
                        />
                      ))
                    }
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