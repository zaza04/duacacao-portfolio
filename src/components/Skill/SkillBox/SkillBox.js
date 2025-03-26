import "../../../assets/scss/Skill/SkillBox/SkillBox.scss";

function SkillBox(props) {

  return (
    <>
      <a className="technology__item" href={props.techURL} target='_blank'  rel="noreferrer">
        <i class={props.icon}></i>
        <p className="technology__name">{props.name}</p>
      </a>
    </>
  );
}

export default SkillBox;