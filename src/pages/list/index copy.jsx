/* eslint-disable react/react-in-jsx-scope */

import "./style.css";
import { Outlet } from "react-router";
import { Link, useSearchParams } from "react-router-dom";

import { List as DummyData } from "./data";
import { useEffect, useRef } from "react";

function List() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const text = searchParams.get("search") || "";
    inputRef.current.value = text;
  }, []);

  const inputRef = useRef();

  function handleSearch() {
    setSearchParams({ search: inputRef.current.value });
  }

  const text = searchParams.get("search") || "";
  console.log({ text });

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

export default List;
