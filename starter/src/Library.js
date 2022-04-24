import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import Shelf from "./Shelf";


const Library = ({library, updateLibrary}) => {
  const [ currentlyReading, setCurrentlyReading ] = useState([]);
  const [ wantToRead, setWantToRead ] = useState([]);
  const [ read, setRead ] = useState([]);

  useEffect(() => {
    setCurrentlyReading([]);
    setWantToRead([]);
    setRead([]);
    library.filter(books => books.shelf !== "none").forEach(book => {
      if (book.shelf === 'currentlyReading') {
        setCurrentlyReading(currentlyReading => [...currentlyReading, book]);
    } else if (book.shelf === 'wantToRead') {
        setWantToRead(wantToRead => [...wantToRead, book]);
    } else if (book.shelf === 'read') {
        setRead(read => [...read, book]);
    } else if (book.shelf === 'none') {
        return;
    }
    })
  },[library])

    return (
    <div className="list-books">
          <div className="list-books-title">
          <h1>MyReads</h1>
          </div>
          <div className="list-books-content" onChange={updateLibrary}>
            <div onChange={updateLibrary}>
              <Shelf title="Want To Read" books={wantToRead}/>
              <Shelf title="Read" books={read} />
              <Shelf title="Currently Reading" books={currentlyReading}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
  )
}

export default Library

