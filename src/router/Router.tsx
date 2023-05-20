import { Route, Routes } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import TopPage from "../components/pages/TopPage";
import PostPage from "../components/pages/PostPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
