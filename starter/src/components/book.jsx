import React from "react";
import * as API from "../BooksAPI";

const Book =({books , recall})=>{

    const getbook = (e)=>{
        if(books.shelf === undefined){
            books.shelf = e.target.value;
            API.update(books,e.target.value).then();
        }else{
            API.update(books,e.target.value).then()
        }
        recall()
    }
    

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:`url(${books.imageLinks?books.imageLinks.smallThumbnail:""})`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={getbook}>
              <option value="move to" disabled>
                Move to...
              </option>
              <option hidden></option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead" >Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">{books.authors}</div>
      </div>
    );
  }


export default Book;
