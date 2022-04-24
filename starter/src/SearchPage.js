import {Link} from "react-router-dom"
import { useEffect, useState} from "react"
import { search } from "./BooksAPI";
import BookCard from "./BookCard";

const SearchPage = ({library, setLibrary}) => {
const [proposals, setProposals] = useState([]);
const [value,setValue] = useState("")

useEffect(()=> {
  if(value.length > 0) {
      search(value).then(data => {data.map(item => {
        const checkItem = library.find(book => book.id === item.id)
        if (checkItem) {
          item.shelf = checkItem.shelf
        } else {
          item.shelf = "none"
        }
        return item
      })
    setProposals(data)
    })
    .catch(error => console.log(error)) 
  }
  else {
    setProposals([])
  }
},[value, proposals.length, library])


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
                onChange={(e) => setValue(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            { proposals && 
              proposals.length > 0 && 
              proposals.map(book => (
                <BookCard book={book} key={book.id}/>
              ))}
            </ol>
          </div>
        </div>
    )
}

export default SearchPage
