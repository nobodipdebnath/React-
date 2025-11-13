import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Homepage from "../Page/Homepage";
import AboutPage from "../Page/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {index: true, Component: Homepage},
            {path: 'about', Component: AboutPage},
            {path: 'contact', Component: Homepage},
            {path: 'blog', Component: Homepage},
            {path: 'services', Component: Homepage},
        ]
    },
])

export default router;