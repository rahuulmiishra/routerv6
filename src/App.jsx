/* eslint-disable react/react-in-jsx-scope */

import Home from "./pages/home";

import "./App.css";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  NavLink,
  useLocation,
  createRoutesFromElements,
  useRouteError,
} from "react-router-dom";

import { useEffect, lazy, Suspense } from "react";
import ProtectedRoute from "./components/protected-route";

const List = lazy(() => import("./pages/list/index"));
const Contact = lazy(() => import("./pages/contact/index"));
const MovieDetail = lazy(() => import("./pages/movie-detail/index"));

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { fetchList } from "./pages/list/index";
import { formAction } from "./pages/contact/index";

let router;

export function getHistory() {
  return router;
}

function App() {
  router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          action={formAction}
          element={
            <Suspense fallback="loading">
              <Contact />
            </Suspense>
          }
        />
        <Route path="/list" element={<ProtectedRoute />}>
          <Route
            loader={fetchList}
            errorElement={<ListError />}
            element={
              <Suspense fallback="Kasdasdasdsad.....">
                <List />
              </Suspense>
            }
            index
          />
          <Route path="detail/:movieId">
            <Route index element={<MovieDetail />}></Route>
            <Route path="actor" element={<Actor />}></Route>
            <Route path="actress" element={<Actress />}></Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} fallbackElement="Loading..." />;
}

function AppRoute() {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // track
  }, [location.pathname]);

  function createBreadCrumb() {
    const paths = location.pathname.split("/");

    let currentPath = "";
    const breaduCrumbJSX = paths
      .filter((p) => !!p)
      .map((p) => {
        currentPath += `${p}/`;
        return (
          <Link key={p} to={currentPath}>
            {" "}
            {`>${p}`}{" "}
          </Link>
        );
      });

    console.log(paths);

    return breaduCrumbJSX;
  }

  function handleRedirect() {
    navigate("/detail", { replace: true, state: [1, 2, 3, 4, 5] });
  }

  function goBack() {
    navigate(-1);
  }

  function goForward() {
    navigate(1);
  }

  return (
    <div>
      <h3>Breadcrumb</h3>
      {createBreadCrumb()}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink
            style={(data) => {
              console.log(data);
              return {};
            }}
            to="/list"
          >
            List
          </NavLink>
        </li>
      </ul>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
      <button onClick={handleRedirect}>Check and Redirect to Detail</button>
    </div>
  );
}

export default App;

function Loader() {
  return <h1>Loading...</h1>;
}

function NotFoundPage() {
  return <h1>404- You're Lost</h1>;
}

function Dummy222() {
  return <h1>Dummy222</h1>;
}

function Amazed() {
  return <h1>amazed</h1>;
}

function Dummy2() {
  return <h1>Dummy2</h1>;
}

function Actor() {
  return <h1>Actor</h1>;
}

function Actress() {
  return <h1>Actress</h1>;
}

function ListError() {
  const errror = useRouteError();
  console.log(errror);

  return <h1>Error in list</h1>;
}
