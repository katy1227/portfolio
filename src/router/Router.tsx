import { Route, Routes } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import AllPage from "../components/pages/AllPage";
import PostPage from "../components/pages/PostPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
