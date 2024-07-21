import Contact from "../pages/contact";

export const AdminRoutes = [
  {
    path: "/",
    component: Contact,
    isProtected: true,
    children: [{}],
  },
];
