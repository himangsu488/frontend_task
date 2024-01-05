import EmployeeInfo from "../pages/EmployeesInfo";
import { userRoles as ur } from "../data/userRole";
export const admin_routes = [
    {
        path: "/employeeinfo",
        ele: <EmployeeInfo />,
        availability: [ur.admin]
    }
]