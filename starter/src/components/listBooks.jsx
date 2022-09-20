import React, { useEffect } from "react";
import Nav from "./nav";
import { useState } from "react";
import * as API from "../BooksAPI";
import Bookshelf from "./bookShelf";
const ListBooks =()=> {

    const [res,setres] =useState([]);
    

    useEffect(()=>{
      getAllBooks()
    },[])

    const getAllBooks = ()=>{
      API.getAll().then((books)=>setres(books))
    }

    const CurrentlyReading = res.filter((book)=> book.shelf === "currentlyReading");
    const wanttoread = res.filter((book)=> book.shelf === "wantToRead");
    const read = res.filter((book)=> book.shelf === "read");

    return (
      <div className="list-books">
        <Nav />
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={CurrentlyReading} onchange={getAllBooks}/>
            <Bookshelf title="Want to Read" books={wanttoread} onchange={getAllBooks}/>
            <Bookshelf title="Read" books={read} onchange={getAllBooks}/>
          </div>
        </div>
        
      </div>
    );
  }

export default ListBooks;
