import { importImg } from "../../../utils";
import AboutSkill from "../../block/AboutSkill";

const SkillArea = () => {
  const {
    javascript,
    vue,
    react,
    typescript,
    next,
    rails,
    python,
    flask,
    django,
    github,
  } = importImg();
  return (
    <div id="skill">
      <h3 className="subTitle">Skills</h3>
      <div className="flex justify-center">
        <div className="mx-20">
          <h3 className="profileName">Kohei Miyoshi</h3>

          <AboutSkill
            skillName="JavaScript"
            className="skillBar w-11/12"
            imgUrl={javascript}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Vue.js"
            className="skillBar w-10/12"
            imgUrl={vue}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="React.js"
            className="skillBar w-8/12"
            imgUrl={react}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Python"
            className="skillBar w-10/12"
            imgUrl={python}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Flask"
            className="skillBar w-4/5"
            imgUrl={flask}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Django"
            className="skillBar w-3/5"
            imgUrl={django}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Ruby on Rails"
            className="skillBar w-3/4"
            imgUrl={rails}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Github"
            className="skillBar w-full"
            imgUrl={github}
            imgAlt="言語のアイコン"
          />
        </div>

        <div className="mx-20">
          <h3 className="profileName">Takahiro Terada</h3>

          <AboutSkill
            skillName="JavaScript"
            className="skillBar w-4/5"
            imgUrl={javascript}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Vue.js"
            className="skillBar w-3/5"
            imgUrl={vue}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="React.js"
            className="skillBar w-3/4"
            imgUrl={react}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="TypeScript"
            className="skillBar w-2/3"
            imgUrl={typescript}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Next.js"
            className="skillBar w-3/4"
            imgUrl={next}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Ruby on Rails"
            className="skillBar w-3/5"
            imgUrl={rails}
            imgAlt="言語のアイコン"
          />
          <AboutSkill
            skillName="Github"
            className="skillBar w-full"
            imgUrl={github}
            imgAlt="言語のアイコン"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillArea;
