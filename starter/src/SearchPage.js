import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import { search } from "./BooksAPI";
import BookCard from "./BookCard";

const SearchPage = ({library, setLibrary}) => {
const [value, setValue] = useState("");
const [proposals, setProposals] = useState([]);

useEffect(() => {
  if (value.length > 0) {
    search(value).then(searchResult => {
      setProposals(searchResult)
      searchResult.forEach(item => {
      const checkitem = library.find(book => book.id === item.id);
      if (checkitem) {
        item.shelf = checkitem.shelf
      } else { 
        item.shelf = "none"
      }
      })
}).catch(error => console.log(error))
}
},[value,library,proposals.length])

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
            className="close-search"
            to="/">Close
            </Link>
            <div className="search-books-input-wrapper">
                <form action="">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)}}
              />
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {proposals.map(book => <BookCard book={book} key={book.id}/>)}
            </ol>
          </div>
        </div>
    )
}

export default SearchPage
