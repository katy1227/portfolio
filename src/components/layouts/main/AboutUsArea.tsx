import { useInView } from "react-intersection-observer";
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

  const [ref, inView] = useInView({
    rootMargin: "-10px 0px",
    triggerOnce: true,
  });

  return (
    <div ref={ref} id="about">
      {inView && (
        <div className="pc:animate-slide-in-fwd-center">
          <h3 className="subTitle">About Us</h3>
          <div className="pc:flex">
            <div className="flex flex-col items-center h-4/5 pc:w-1/2">
              <ProfileLayout
                name="Kohei Miyoshi"
                about={`三好 航平(みよし こうへい)と申します。\n来年の4月からフルスタックエンジニアとして働きます。\nWeb開発関係のインターンシップを合計約2年間、2社で行っております。\nHTML/CSS、JavaScript、Vue.js、Ruby on Rails, FastAPI(Python)などによるウェブ開発やPythonによる機械学習による研究などの経験があります。また，趣味としてのデスクトップアプリ制作や、ゲーム開発などを行ってきました。\nより良い価値提供をするためのお手伝いをできることを楽しみにしております。`}
                imgUrl={kohei}
                imgAlt="こうへいの画像です"
              />
              <div className="mt-10 pc:mx-20">
                <AboutSkill
                  skillName="JavaScript"
                  className="w-11/12 skillBar"
                  imgUrl={javascript}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Vue.js"
                  className="w-10/12 skillBar"
                  imgUrl={vue}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="React.js"
                  className="w-8/12 skillBar"
                  imgUrl={react}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Python"
                  className="w-10/12 skillBar"
                  imgUrl={python}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Flask"
                  className="w-4/5 skillBar"
                  imgUrl={flask}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Django"
                  className="w-3/5 skillBar"
                  imgUrl={django}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Ruby on Rails"
                  className="w-3/4 skillBar"
                  imgUrl={rails}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Github"
                  className="w-full skillBar"
                  imgUrl={github}
                  imgAlt="言語のアイコン"
                />
              </div>
            </div>

            <div className="flex flex-col items-center h-4/5 pc:w-1/2">
              <ProfileLayout
                name="Takahiro Terada"
                about={`私は寺田 卓広(てらだ たかひろ)です。\n来年の4月からフロントエンドエンジニアとして働きます。\n現在は、ReactとTypeScriptを使ったアプリケーション作成やホームページ作成をインターンや趣味で行っております。\nHTML/CSS、JavaScript、ReactJS、TypeScript、Ruby on Railsを扱うことができます。\nあなたの素敵な想いを形にするお手伝いをさせてください。`}
                imgUrl={takahiro}
                imgAlt="たかひろの画像です"
              />
              <div className="mt-10 pc:mx-20">
                <AboutSkill
                  skillName="JavaScript"
                  className="w-4/5 skillBar"
                  imgUrl={javascript}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Vue.js"
                  className="w-3/5 skillBar"
                  imgUrl={vue}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="React.js"
                  className="w-3/4 skillBar"
                  imgUrl={react}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="TypeScript"
                  className="w-2/3 skillBar"
                  imgUrl={typescript}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Next.js"
                  className="w-3/4 skillBar"
                  imgUrl={next}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Ruby on Rails"
                  className="w-3/5 skillBar"
                  imgUrl={rails}
                  imgAlt="言語のアイコン"
                />
                <AboutSkill
                  skillName="Github"
                  className="w-full skillBar"
                  imgUrl={github}
                  imgAlt="言語のアイコン"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsArea;
