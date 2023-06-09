import { workProduct } from "../../types/props";

const WorkProduct = (props: workProduct) => {
  const { title, tag, siteUrl, imgUrl, imgAlt } = props;
  return (
    <div className="mt-7 mx-5">
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 hoverLink"
      >
        <img src={imgUrl} alt={imgAlt} height={300} width={400} />
        <h3 className="font-title mt-5 underline">{title}</h3>
        <div className="font-tag">{tag}</div>
      </a>
    </div>
  );
};

export default WorkProduct;
