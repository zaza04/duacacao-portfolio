// BOOSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// SCSS
import "../../assets/scss/Skill/Skill.scss";
// JSON
import technologyData from "../../data/technologies.json";
// SKILL BOX
import SkillBox from "./SkillBox/SkillBox";

function Skill() {

  return (
    <>
      <section id="skill" className="skill section">
        <Container>
            <Row>
              <Col>
                <h1 className="section__title">What I can do</h1>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col lg={4} sm={4} className="d-flex justify-content-left align-items-center custom-name">
                <p className="technology__name">Library/Framework</p>
              </Col>
              <Col lg={8} sm={8} className="d-flex justify-conten-left custom-box">
                {(technologyData || []).filter((value) => (value.techCategory) === "Library/Framework")
                  .map((item) => (
                    <SkillBox 
                      key = {item.techID}
                      icon = {item.techIcon} 
                      name = {item.techName} 
                      techURL = {item.techURL} 
                    />
                ))}
              </Col>
            </Row>
            <Row className="mb-5">
              <Col lg={4} sm={4} className="d-flex justify-content-left align-items-center custom-name">
                <p className="technology__name">Languages</p>
              </Col>
              <Col lg={8} sm={8} className="d-flex justify-conten-left custom-box">
                {(technologyData || []).filter((value) => (value.techCategory) === "Languages")
                  .map((item) => (
                    <SkillBox 
                      key = {item.techID}
                      icon = {item.techIcon} 
                      name = {item.techName} 
                      techURL = {item.techURL} 
                    />
                ))}
              </Col>
            </Row>
            <Row className="mb-5">
              <Col lg={4} sm={4} className="d-flex justify-content-left align-items-center custom-name">
                <p className="technology__name">Databases</p>
              </Col>
              <Col lg={8} sm={8} className="d-flex justify-conten-left custom-box">
                {(technologyData || []).filter((value) => (value.techCategory) === "Databases")
                  .map((item) => (
                    <SkillBox 
                      key = {item.techID}
                      icon = {item.techIcon} 
                      name = {item.techName} 
                      techURL = {item.techURL} 
                    />
                ))}
              </Col>
            </Row>
            <Row className="mb-5">
              <Col lg={4} sm={4} className="d-flex justify-content-left align-items-center custom-name">
                <p className="technology__name">Tools/Platfroms</p>
              </Col>
              <Col lg={8} sm={8} className="d-flex justify-conten-left custom-box">
                {(technologyData || []).filter((value) => (value.techCategory) === "Tools/Platforms")
                  .map((item) => (
                    <SkillBox 
                      key = {item.techID}
                      icon = {item.techIcon} 
                      name = {item.techName} 
                      techURL = {item.techURL} 
                    />
                ))}
              </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Skill;