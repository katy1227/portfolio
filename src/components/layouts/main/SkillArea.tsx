import { importImg } from "../../../utils";
import AboutSkill from "../../block/AboutSkill";

const SkillArea = () => {
  const { ocean } = importImg();
  return (
    <div id="skill">
      <h3 className="title">Skills</h3>
      <div className="flex justify-center">
        <div className="mx-20">
          <h3 className="profileName">Kohei Miyoshi</h3>

          <AboutSkill
            skillName="JavaScript"
            className="skillBar w-11/12"
            imgUrl={ocean}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Vue.js"
            className="skillBar w-11/12"
            imgUrl={ocean}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="React.js"
            className="skillBar w-1/3"
            imgUrl={ocean}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Python"
            className="skillBar w-3/4"
            imgUrl={ocean}
            imgAlt="言語のアイコン"
          />
        </div>

        <div className="mx-20">
          <h3 className="profileName">Takahiro Terada</h3>

          <AboutSkill
            skillName="JavaScript"
            className="skillBar w-11/12"
            imgUrl={ocean}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Vue.js"
            className="skillBar w-1/3"
            imgUrl={ocean}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="React.js"
            className="skillBar w-11/12"
            imgUrl={ocean}
            imgAlt="言語のアイコン"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillArea;
