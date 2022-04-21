/* import {search} from "./BooksAPI"
 */import {Link} from "react-router-dom"


const SearchPage = () => {
/*  const handleChange = async(e) => {
   const input = e.target.value
   if (input.length > 0) {
    const results = await search(input);
    console.log(results)
   }
  } */

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

