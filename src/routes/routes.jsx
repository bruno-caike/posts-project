import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts/index"
import Post from "../pages/Posts/show"
import Users from "../pages/Users/index"
import User from "../pages/Users/show"
import NotFound from "../pages/NotFound";
import { routes } from "../utils/variables";

export const RoutesSystem = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.posts} element={<Posts />} />
                <Route path={routes.postsShow(':id', ':slug')} element={<Post />} />
                <Route path={routes.users} element={<Users />} />
                <Route path={routes.usersShow(':id', ':slug')} element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default RoutesSystem;