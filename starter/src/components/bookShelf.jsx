import React from "react";
import Book from "./book";

const Bookshelf = ({ title, books , onchange }) => {
    
    
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map((book)=><li key={book.id}>{<Book books={book} recall={onchange}/>}</li>)}
            
        </ol>
      </div>
    </div>
  );
};
export default Bookshelf;
