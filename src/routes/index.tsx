import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";
import { ClientRoutes } from './clientRoutes';

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ClientRoutes.HOME} element={<HomePage />} />
                <Route path={ClientRoutes.ABOUT} element={<AboutPage />} />
                <Route path={ClientRoutes.SKILLS} element={<SkillsPage />} />
                <Route path={ClientRoutes.PROJECTS} element={<ProjectsPage />} />
                <Route path={ClientRoutes.CONTACT} element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default routes;