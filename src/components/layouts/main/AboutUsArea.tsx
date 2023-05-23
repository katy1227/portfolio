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
          about="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認する"
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
