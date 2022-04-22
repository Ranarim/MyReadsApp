import "./App.css";
import { useState,useEffect } from "react";
import SearchPage from "./SearchPage";
import Library from "./Library.js"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {getAll} from "./BooksAPI.js";

const App = () => {
const [library, setLibrary] = useState([])

useEffect(() => {
  getAll().then(res => setLibrary(res))
  .catch(err => console.log(err))
},[library.length]);

  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Library library={library}/>} />
       <Route path="/search" element={<SearchPage library={library}/>} />
       </Routes>
    </Router>
  )
}

export default App;
