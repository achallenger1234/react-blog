import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../components/pages/LoginPage";
import { BlogPage } from "../components/pages/BlogPage";
import { EditPage } from "../components/pages/EditPage";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
    
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/*" element={<Page404 />} />
        </Routes>
        );
};