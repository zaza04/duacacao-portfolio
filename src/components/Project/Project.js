// BOOSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// SCSS
import "../../assets/scss/Project/Project.scss";
// DATA
import dataProject from "../../data/projects.json";
// PROJECT BOX
import ProjectBox from "./ProjectBox/ProjectBox";


function Project() {

  // console.log(dataProject);

  return (
    <>
      <section id="project" className="project section">
        <Container>
          <Row>
            <Col>
              <h1 className="section__title">Check out what I have built</h1>
            </Col>
          </Row>
          <Row>
            <div className="project__box">
              <h3 className="project__heading">Here are my featured projects.</h3>
              <div className="project__list">
                {(dataProject || []).map((item) => (
                  <ProjectBox 
                    key={item.projectID}
                    name={item.projectTitle}
                    technology={item.projectTechnologies}
                    desc={item.projectDescription}
                    source={item.projectSource}
                  />
                ))} 
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Project;