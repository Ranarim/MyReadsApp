import "./App.css";
import { useState,useEffect } from "react";
import SearchPage from "./components/SearchPage";
import Library from "./components/Library.js"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {getAll} from "./BooksAPI"

const App = () => {
const [library, setLibrary] = useState([])

const updateLibrary = () => {
  getAll().then(res => setLibrary(res));
  console.log("Now i am fetching the library with getAll")
}

useEffect (() => {
updateLibrary();
}, [library.length])

  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Library library={library} updateLibrary={updateLibrary}/>}/>
       <Route path="/search" element={<SearchPage library={library} updateLibrary={updateLibrary}/>} />
       </Routes>
    </Router>
  )
}

export default App;
