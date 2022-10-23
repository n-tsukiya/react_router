import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {page1Routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.children} />
        );
      })}
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
};
