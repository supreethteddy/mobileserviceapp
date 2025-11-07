
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Onboarding from "../pages/onboarding/page";
import Auth from "../pages/auth/page";
import BookRepairPage from "../pages/repair/book";
import ServicesPage from "../pages/services/page";
import MarketPage from "../pages/market/page";
import TrackOrderPage from "../pages/orders/track";
import ProfilePage from "../pages/profile/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/market",
    element: <MarketPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/repair/book",
    element: <BookRepairPage />,
  },
  {
    path: "/orders/track",
    element: <TrackOrderPage />,
  },
  {
    path: "/manager",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
