import {Link} from "react-router-dom"
/* import {BookCard} from "./BookCard.js"
 */

const SearchPage = ({library, setLibrary}) => {
  const handleChange = async(e) => {
   const input = e.target.value
   if (input.length > 0) {
    
  }
  } 

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
            className="close-search"
            to="/"
>
              Close
            </Link>
            <div className="search-books-input-wrapper">
                <form action="">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={handleChange}
              />
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

            </ol>
          </div>
        </div>
    )
}

export default SearchPage

