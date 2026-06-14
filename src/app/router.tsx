import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import ProtectedRoute from "../app/routes/ProtectedRoute";
import AppLayout from "../components/Layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        Component: AppLayout,
        children: [
          {
            path: "/",
            Component: Dashboard,
          },
          {
            path: "/transactions",
            Component: Transactions,
          },

          {
            path: "/settings",
            Component: Settings,
          },
        ],
      },
    ],
  },
]);
