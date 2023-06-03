import { importImg } from "../../../utils";
import AboutSkill from "../../block/AboutSkill";
import ProfileLayout from "../../block/ProfileLayout";

const AboutUsArea = () => {
  const {
    kohei,
    takahiro,
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
    <div id="about">
      <h3 className="subTitle">About Us</h3>
      <div className="pc:flex">
        <div className="flex flex-col items-center h-4/5">
          <ProfileLayout
            name="Kohei Miyoshi"
            about={`私は三好 航平(みよし こうへい)です。\n来年の4月からフルスタックエンジニアになります。\n現在は、Vue.jsとRuby on Railsを使ったアプリケーション作成をインターンで行っております。\nHTML/CSS、JavaScript、Vue.js、Ruby on Rails、pythonなどを扱うことができます。\nあなたの素敵な想いを形にするお手伝いをさせてください。`}
            imgUrl={kohei}
            imgAlt="こうへいの画像です"
          />
          <div className="pc:mx-20 mt-10">
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
        </div>

        <div className="flex flex-col items-center h-4/5">
          <ProfileLayout
            name="Takahiro Terada"
            about={`私は寺田 卓広(てらだ たかひろ)です。\n来年の4月からフロントエンドエンジニアになります。\n現在は、ReactとTypeScriptを使ったアプリケーション作成やホームページ作成をインターンや趣味で行っております。\nHTML/CSS、JavaScript、ReactJS、TypeScript、Ruby on Railsを扱うことができます。\nあなたの素敵な想いを形にするお手伝いをさせてください。`}
            imgUrl={takahiro}
            imgAlt="たかひろの画像です"
          />
          <div className="pc:mx-20 mt-10">
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
    </div>
  );
};

export default AboutUsArea;
