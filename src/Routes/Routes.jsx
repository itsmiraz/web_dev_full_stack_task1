import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Settings from "../Page/Settings/Settings";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Settings/>
            }
        ]
    }
])