import React from "react";
import Cards from "../Cards";
import Category from "../Category";
// import { useLocation } from "react-router-dom";

export default function Products() {
  //   const query = useLocation();
  //   console.log(query.pathname);
  //   let id = query.pathname.split("/")[3];
  return (
    <div>
      <Category></Category>
      <Cards />
    </div>
  );
}
