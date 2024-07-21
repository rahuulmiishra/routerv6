/* eslint-disable react/react-in-jsx-scope */

import "./style.css";

import { List as DummyData } from "../list/data";
import { useOutletContext, useParams, Outlet } from "react-router";

function List() {
  const param = useParams();

  const data = DummyData[param.movieId];

  const outletData = useOutletContext();

  return (
    <div className="list-card">
      {outletData}
      <button>Go back</button>
      <span>Title: {data?.title}</span>
      <span>Year: {data?.year}</span>
      <span>Detail: {data?.extract}</span>
      <span>Genres: {data?.genres?.split?.("")}</span>
      <Outlet />
    </div>
  );
}

export default List;
