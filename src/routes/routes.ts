import NotFoundPage from "@/pages/NotFoundPage";
import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy load pages
const HomePage = lazy(() => import("@/pages/Home"));
const VlogListPage = lazy(() => import("@/pages/vlogs/ListPage"));
const VlogDetailPage = lazy(() => import("@/pages/vlogs/DetailsPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const MainLayout = lazy(() => import("@/components/layout/MainLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(MainLayout),
    children: [
      { index: true, element: React.createElement(HomePage) },
      { path: "vlogs", element: React.createElement(VlogListPage) },
      { path: "vlogs/:id", element: React.createElement(VlogDetailPage) },
      { path: "about", element: React.createElement(AboutPage) },
      { path: "contact", element: React.createElement(ContactPage) },
      { path: "*", element: React.createElement(NotFoundPage) },
    ],
  },
]);

export default router;
