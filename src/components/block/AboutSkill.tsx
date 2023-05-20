import { aboutSkill } from "../../types/props";

const AboutSkill = (props: aboutSkill) => {
  const { skillName, className, imgUrl, imgAlt } = props;
  return (
    <div className="flex my-5">
      <img src={imgUrl} alt={imgAlt} className="h-16 w-16 rounded-full" />
      <div className="flex flex-col justify-center items-center">
        <h3>{skillName}</h3>
        <div className="h-1.5 shadow-sm w-96 bg-gray-300 rounded ml-5">
          <div className={className}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkill;
