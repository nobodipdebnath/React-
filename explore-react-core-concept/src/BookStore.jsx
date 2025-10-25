import React from "react";
import Book from "./book";

function BookStore({ books }) {
  return (
    <div>
      <h3>BookStore : {books.length}</h3>
      {books.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
}

export default BookStore;
