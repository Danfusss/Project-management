import { Route, Routes } from "react-router-dom";

import HomePage from "ui/HomePage/index";
import ProjectDetails from "ui/ProjectsPage";

export default function RouterWrapper() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/project-details/:id" Component={ProjectDetails} />
      <Route path="/project-details/edit/:id" Component={ProjectDetails} />
    </Routes>
  );
}
