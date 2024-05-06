import HomePage from "@/pages/HomePage";
import DetailPage from "@/pages/DetailPage";
import NotFoundPage from "@/pages/NotFoundPage";

import { Route, Routes, useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route index element={<HomePage />} />
        <Route path=":no" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
