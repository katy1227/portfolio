import { aboutSkill } from "../../types/props";

const AboutSkill = (props: aboutSkill) => {
  const { skillName, className, imgUrl, imgAlt } = props;
  return (
    <div className="flex my-5">
      <img src={imgUrl} alt={imgAlt} className="h-16 w-16 rounded-full" />
      <div className="flex flex-col justify-center items-center">
        <h3>{skillName}</h3>
        <div className="pc:w-96 w-60 ml-5 h-1.5 shadow-sm  bg-gray-300 rounded">
          <div className={className}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkill;
