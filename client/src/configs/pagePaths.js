import Admin from "../pages/admin/Admin";
import NavbarMenuCreatePage from "../pages/admin/customComponents/Content/NavbarMenuCreatePage";
import App from './../App';

const ADMIN = '/admin';
const paths = [
    {
        path: '/',
        component: <App />
    },
    {
        path: ADMIN,
        component: <Admin />
    },
    {
        path: `${ADMIN}/menus/create`,
        component: <NavbarMenuCreatePage />
    }
];

export default paths;
