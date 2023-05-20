import { workProduct } from "../../types/props";

const WorkProduct = (props: workProduct) => {
  const { title, tag, imgUrl, imgAlt } = props;
  return (
    <div className="w-2/6 mt-7">
      <img src={imgUrl} alt={imgAlt} height={300} width={400} />
      {/* 画像にURLを設置して、クリックしたらサイトに飛ぶように設定 */}
      <h3 className="font-title">{title}</h3>
      <div className="font-tag">{tag}</div>
    </div>
  );
};

export default WorkProduct;
