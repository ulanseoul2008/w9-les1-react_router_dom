import React from "react";
import { Route, Routes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AboutPage from "./Components/AboutPage";
import { Layout } from "./Components/Layout";
import HomePage from "./Components/HomePage";
import UserDetails from "./Components/UserDetails";
import UsersPage from "./Components/UsersPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
