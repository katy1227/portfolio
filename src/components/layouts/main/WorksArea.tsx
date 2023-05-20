import { importImg } from "../../../utils";
import WorkProduct from "../../block/WorkProduct";

const WorksArea = () => {
  const { ocean } = importImg();
  return (
    <div id="works">
      <h3 className="title">Works</h3>
      <div className="flex justify-evenly flex-wrap">
        <WorkProduct
          title="タイトル"
          tag="Design / Coding(Responsive) / WordPress"
          imgUrl={ocean}
          imgAlt="作成したアプリの写真"
        />
        <WorkProduct
          title="タイトル"
          tag="Design / Coding(Responsive) / WordPress"
          imgUrl={ocean}
          imgAlt="作成したアプリの写真"
        />
        <WorkProduct
          title="タイトル"
          tag="Design / Coding(Responsive) / WordPress"
          imgUrl={ocean}
          imgAlt="作成したアプリの写真"
        />
        <WorkProduct
          title="タイトル"
          tag="Design / Coding(Responsive) / WordPress"
          imgUrl={ocean}
          imgAlt="作成したアプリの写真"
        />
      </div>
    </div>
  );
};

export default WorksArea;
