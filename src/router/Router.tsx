import { Route, Routes } from "react-router-dom";
import NotFound from "../components/pages/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NotFound />} />
    </Routes>
  );
};
