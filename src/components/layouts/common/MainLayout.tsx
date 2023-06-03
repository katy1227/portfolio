import AboutUsArea from "../main/AboutUsArea";
import ContactArea from "../main/ContactArea";
import TopArea from "../main/TopArea";
import WorksArea from "../main/WorksArea";

const MainLayout = () => {
  return (
    <main className="font-link">
      <TopArea />
      <AboutUsArea />
      <WorksArea />
      <ContactArea />
    </main>
  );
};

export default MainLayout;
