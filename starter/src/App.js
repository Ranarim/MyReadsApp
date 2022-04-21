import "./App.css";
import { useState } from "react";
import SearchPage from "./SearchPage";
import Library from "./Library.js"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
const {library, setLibrary} = useState([])

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

