import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {page1Routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.children} />
        );
      })}
      {page2Routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.children} />
        );
      })}
      <Route path="/page2" element={<Page2 />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};
