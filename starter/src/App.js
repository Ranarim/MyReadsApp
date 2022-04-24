import "./App.css";
import { useState,useEffect } from "react";
import SearchPage from "./components/SearchPage";
import Library from "./components/Library.js"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {getAll} from "./BooksAPI.js";

const App = () => {
const [library, setLibrary] = useState([])

const updateLibrary = () => {
  getAll().then(res => setLibrary(res))
  .catch(err => console.log(err))
}
useEffect(() => {
  console.log("Now im rendering for Changing the Library")
updateLibrary();
},[library.length]);

  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Library library={library} updateLibrary={updateLibrary}/>} />
       <Route path="/search" element={<SearchPage library={library} updateLibrary={updateLibrary}/>} />
       </Routes>
    </Router>
  )
}

export default App;
