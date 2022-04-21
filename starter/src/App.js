import "./App.css";
import { useState,useEffect } from "react";
import SearchPage from "./SearchPage";
import Library from "./Library.js"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {getAll} from "./BooksAPI.js";

const App = () => {
const [library, setLibrary] = useState([])


useEffect(() => {
  const fetchBooks = async() => {
    const res = await getAll();
    console.log(res.data)
}
fetchBooks()
}
,[]
)

  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Library library={library} setLibrary={setLibrary}/>} />
      
       <Route path="/search" element={<SearchPage library={library} setLibrary={setLibrary}/>} />
       </Routes>
    </Router>
  )
}

export default App;

