import { useState } from "react";
// SCSS
import "../../../assets/scss/Project/ProjectBox/ProjectBox.scss";
// ICON
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

// import img from "../../../assets/images/project-1.png";

function ProjectBox(props) {

  const [isOpenModal ,setIsOpenModal] = useState(false);
  const imageUrl = `${process.env.PUBLIC_URL}/${props.img}`;
  
  const handleModal = (value) => {
    setIsOpenModal(value);
  }

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
          <p className="read-more" onClick={() => {handleModal(true)}}>
            Read more
            <span><FaArrowRightLong /></span>
          </p>

         
          <div className={isOpenModal ? "project__modal modal-active" : "project__modal"}>
            <div className="project__modal-content">
              <div className="project__modal-button" onClick={() => {handleModal(false)}}>
                <IoMdClose />
              </div>
              <h3 className="project__modal-title">
                {props.title}
              </h3>
              <div className="project__modal-img">
                <img src={imageUrl} alt="project-1"/>
              </div>
              <div className="project__modal-feature">
                <p><b>Team size:</b> {props.team}</p>
                <p><b>Role:</b> {props.role}</p>
                <p><b>Live preview:</b> <a href={props.link} target="_blank" className="project__modal-link">Click here</a></p>
                <p><b>Feature:</b></p>
                <ul className="project__modal-scroll">
                  {(props.projectFeatures || []).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProjectBox;