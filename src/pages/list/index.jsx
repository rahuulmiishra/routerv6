/* eslint-disable react/react-in-jsx-scope */

import "./style.css";
import { Await, defer, Outlet, useLoaderData } from "react-router";
import { Link, useSearchParams, Navigate } from "react-router-dom";

import { List as DummyData } from "./data";
import { Suspense, useEffect, useRef } from "react";

function List() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dataFromLoader = useLoaderData();

  console.log("dataFromLoader", dataFromLoader);

  useEffect(() => {}, []);

  useEffect(() => {
    const text = searchParams.get("search") || "";
    // inputRef.current.value = text;
  }, []);

  const inputRef = useRef();

  function handleSearch() {
    setSearchParams({ search: inputRef.current.value });
  }

  const text = searchParams.get("search") || "";
  console.log("IN List component");

  const filteredList = DummyData.filter((x) =>
    x.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="list">
      <Outlet context={"This data is from list component"} />
      <div className="search-container">
        <input type="text" ref={inputRef} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <Suspense fallback="Fetching Data....">
        <Await resolve={dataFromLoader?.response}>
          {(dataFromAPI) => {
            console.log("data", dataFromAPI);
          }}
        </Await>
      </Suspense>

      {filteredList.map((movie, i) => {
        return (
          <Link to={`detail/${i}`} className="card" key={i}>
            <span>{movie.title}</span>
            <img src={movie.thumbnail} height="140px" width={"120px"} />
          </Link>
        );
      })}
    </div>
  );
}

export const fetchList = async function () {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Error from API");
    }, 3000);
  });

  return defer({ response: pr });
};

export default List;
