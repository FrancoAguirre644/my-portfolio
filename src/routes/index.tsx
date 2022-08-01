import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { ClientRoutes } from './clientRoutes';

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ClientRoutes.HOME} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default routes;