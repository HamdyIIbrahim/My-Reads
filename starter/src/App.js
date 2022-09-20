import "./App.css";
import ListBooks from "./components/listBooks";
import {Route, Routes,Link} from "react-router-dom";
import Search from "./components/search";
import React from "react";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<Search/>} />
        <Route path="/" element={
        <React.Fragment>
          <ListBooks/>
          <div className="open-search">
            <Link to="/search" >Add a book</Link>
          </div>
        </React.Fragment>
        } />
      </Routes>
    
    </div>
    
  );
}

export default App;
