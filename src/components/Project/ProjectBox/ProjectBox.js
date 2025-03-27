import "../../../assets/scss/Project/ProjectBox/ProjectBox.scss";
// ICON
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectBox(props) {
  
  return (
    <>
      <div className="project__item">
        <h3 className="project__name">{props.name}</h3>
        <ul className="tech__list">
          {(props.technology || []).map((item, index) => (
            <li className="tech__item" key={index}>{item}</li>
          ))}
        </ul>
        <p className="project__desc">{props.desc}</p>
        <div className="project__link">
          <a className="icon" href={props.source} target="_blank">
            <i className="devicon-github-original colored"></i>
          </a>
          <p className="read-more" href="#" target="_blank">
            Read more
            <span><FaArrowRightLong /></span>
          </p>
        </div>
      </div>
    </>
  )
}

export default ProjectBox;