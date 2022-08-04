import React from "react";
import { Link, useParams } from "react-router-dom";

export default function BookList() {
  const id = useParams();
  return (
    <div>
      <Link to="/books/new">NewBook</Link>
      <br />
      <Link to="/books/1">Book 1</Link>
      <br />

      <Link to="/books/2">Book 2</Link>
    </div>
  );
}
