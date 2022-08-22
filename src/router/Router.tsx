import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../components/pages/LoginPage";
import { BlogPage } from "../components/pages/BlogPage";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
    
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/*" element={<Page404 />} />
        </Routes>
        );
};