import React, { useEffect } from "react";
import {Link } from "react-router-dom";
import { useState } from "react";
import * as API from '../BooksAPI';
import Book from "./book";
const Search = ()=>{
  const [query,setquery] = useState("");
  const [result , setresult] = useState([]);
  
  const updateQuery =(event)=>{
    setquery(event.target.value);
  };
  useEffect(()=>{
    if (query === ""){
      return;
    }
    API.search(query).then((data)=>{
      if(data?.error){
        setresult([])
      }else{
        setresult(data)
      }
    })
  },[query])
  
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN"  value={query} onChange={updateQuery}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {result.map((val)=><li key={val.id}>{<Book books={val}/>}</li>)} 
          </ol>
        </div>
      </div>
    );
}
export default Search;
