import { workProduct } from "../../types/props";

const WorkProduct = (props: workProduct) => {
  const { title, tag, siteUrl, imgUrl, imgAlt } = props;
  return (
    <div className="mt-7">
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 hover:text-blue-500"
      >
        <img src={imgUrl} alt={imgAlt} height={300} width={400} />
        <h3 className="font-title">{title}</h3>
        <div className="font-tag">{tag}</div>
      </a>
    </div>
  );
};

export default WorkProduct;
