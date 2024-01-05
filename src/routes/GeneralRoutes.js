import HomePage from "../pages/HomePage";
import HomePageAdmin from "../pages/HomePageAdmin";
import Auth from "../components/auth";
import { userRoles as ur } from "../data/userRole";
export const general_routes = [
    {
        path: "/home",
        ele: <HomePage />,
        availability: [ur.employee]
    },
    {
        path: "/home2",
        ele: <HomePageAdmin />,
        availability: [ur.admin]
    },
    {
        path: "/loginpage",
        ele: <Auth />,
        availability: [ur.employee, ur.admin]
    }
]