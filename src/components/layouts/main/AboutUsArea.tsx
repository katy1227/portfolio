import { importImg } from "../../../utils";
import ProfileLayout from "../../block/ProfileLayout";

const AboutUsArea = () => {
  const { kohei, takahiro } = importImg();
  return (
    <div id="about">
      <h3 className="subTitle">About Us</h3>
      <div className="flex justify-around ">
        <ProfileLayout
          name="Kohei Miyoshi"
          about={`私は三好 航平(みよし こうへい)です。\n来年の4月からフルスタックエンジニアになります。\n現在は、Vue.jsとRuby on Railsを使ったアプリケーション作成をインターンで行っております。\nHTML/CSS、JavaScript、Vue.js、Ruby on Rails、pythonなどを扱うことができます。\nあなたの素敵な想いを形にするお手伝いをさせてください。`}
          imgUrl={kohei}
          imgAlt="こうへいの画像です"
        />
        <ProfileLayout
          name="Takahiro Terada"
          about={`私は寺田 卓広(てらだ たかひろ)です。\n来年の4月からフロントエンドエンジニアになります。\n現在は、ReactとTypeScriptを使ったアプリケーション作成やホームページ作成をインターンや趣味で行っております。\nHTML/CSS、JavaScript、ReactJS、TypeScript、Ruby on Railsを扱うことができます。\nあなたの素敵な想いを形にするお手伝いをさせてください。`}
          imgUrl={takahiro}
          imgAlt="たかひろの画像です"
        />
      </div>
    </div>
  );
};

export default AboutUsArea;
