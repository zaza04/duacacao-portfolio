// SCSS
import "../../../assets/scss/Journey/JourneyBox/JourneyBox.scss";
// ICON
import { SlGraduation, SlBriefcase } from "react-icons/sl";

function JourneyBox(props) {

  const iconMap = {
    SlGraduation: <SlGraduation />,
    SlBriefcase: <SlBriefcase />
  };

  return (
    <>
      <div className='timeline__item'>
        <div className='timeline__icon'>
          {iconMap[props.icon]}
        </div>
        <div className='timeline__description'>
          <h3 className='timeline__name'>
            {props.name}
          </h3>
          <p className='timeline__date'>
            {props.date}
          </p>
          <ul className='timeline__text'>
            {(props.description || []).map((item, index) => (
              <li key={index} className="item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default JourneyBox;