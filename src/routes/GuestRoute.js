import Contact from "../pages/contact";

export const GuestRoutes = [
  {
    path: "/",
    component: Contact,
    isProtected: true,
    children: [{}],
  },
];
