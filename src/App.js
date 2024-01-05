import React from "react"; 
import "./style.css";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/RequireAuth";
import RedirectIfLoggedIn from "./utils/RedirectIfLoggedIn";
import { auth_routes } from "./routes/UnProtectedRoutes";
import { admin_routes } from "./routes/AdminRoutes";
import { employee_routes } from "./routes/EmployeeRoutes";
import { general_routes } from "./routes/GeneralRoutes";
import Nav from "./pages/Nav";

const AppRoutes = () => { 
    const protectedRoutes = [
        ...admin_routes,
        ...employee_routes,
        ...general_routes
    ];

    const unprotectedRoutes = [...auth_routes];

    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                {
                    unprotectedRoutes.map((e) => {
                        return (
                            <Route
                                key={e.path}
                                exact
                                path={e.path}
                                element={
                                    <RedirectIfLoggedIn>
                                        {e.ele}
                                    </RedirectIfLoggedIn>
                                }
                                
                            />
                        );
                    })
                }

                {
                    protectedRoutes.map((e) => {
                        return (
                            <Route
                                key={e.path}
                                exact
                                path={e.path}
                                element={
                                    <RequireAuth userroles={e?.availability}>
                                        {e.ele}
                                    </RequireAuth>
                                }
                                
                            />
                        );
                    })
                }
            </Routes>
        </BrowserRouter>
    );
};
export default AppRoutes;
