import {Link} from "react-router-dom"
import {getAll} from "./BooksAPI.js"
const Library = ({library, setLibrary}) => {

    const loadingBooks = async() => {
        const data = await getAll();
        setLibrary([...library, data])
        console.log(library);
    }

    return (
    <div className="list-books">
          <div className="list-books-title">
          <h1 onClick={loadingBooks}>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
  )
}

export default Library

