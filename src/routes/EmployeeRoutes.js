import Reimbursements from "../components/reimbursement_form";
import { userRoles as ur } from "../data/userRole";
export const employee_routes = [
    
    {
        path: "/form",
        ele: <Reimbursements />,
        availability: [ur.employee]
    }
]