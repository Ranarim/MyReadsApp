import "./App.css";
import { useState,useEffect } from "react";
import SearchPage from "./SearchPage";
import Library from "./Library.js"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {getAll} from "./BooksAPI.js";

const App = () => {
const [library, setLibrary] = useState([])

const updateLibrary = () => {
  getAll().then(res => setLibrary(res))
  .catch(err => console.log(err))
}
useEffect(() => {
updateLibrary()
},[library.length]);

  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Library library={library} updateLibrary={updateLibrary}/>} />
       <Route path="/search" element={<SearchPage library={library}/>} />
       </Routes>
    </Router>
  )
}

export default App;
