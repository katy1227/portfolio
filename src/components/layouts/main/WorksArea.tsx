import { useInView } from "react-intersection-observer";
import { importImg } from "../../../utils";
import WorkProduct from "../../block/WorkProduct";

const WorksArea = () => {
  const { geeklife, instaclone, aus } = importImg();

  const [ref, inView] = useInView({
    rootMargin: "-10px 0px",
    triggerOnce: true,
  });

  return (
    <div ref={ref} id="works">
      {inView && (
        <div className="pc:animate-slide-in-fwd-center">
          <h3 className="subTitle">Works</h3>
          <div className="flex justify-around flex-wrap content-around">
            <WorkProduct
              title="Geek Life"
              tag="Design / Ruby on Rails / JavaScript"
              siteUrl="https://careerpassforgeeksalon.fly.dev/"
              imgUrl={geeklife}
              imgAlt="作成したアプリの写真"
            />
            <WorkProduct
              title="インスタクローンアプリ"
              tag="Design / React / TypeScript / Ruby on Rails / Responsive"
              siteUrl="https://insta-backend.fly.dev/"
              imgUrl={instaclone}
              imgAlt="作成したアプリの写真"
            />
            <WorkProduct
              title="オーストラリア留学企業のホームページ"
              tag="Design / Wordpress / Canva / Resposive"
              siteUrl="https://milan121365.xsrv.jp/"
              imgUrl={aus}
              imgAlt="作成したアプリの写真"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksArea;
