import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import { AppPlans } from "../pages/AppPlans/AppPlans";
import { AppSummary } from "../pages/AppSummary/AppSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    index: true,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/plans",
        element: <AppPlans />,
      },
      {
        path: "/summary",
        element: <AppSummary />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error</p>,
  },
]);
