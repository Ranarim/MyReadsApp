import BookCard from "./BookCard";

const Shelf = ({books, title, library, updateLibrary}) => {
    
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map(book => {
        return (<BookCard book={book} key={book.id} updateLibrary={updateLibrary}/>)
        })}
          </ol>
        </div>
      </div>
    )
}

export default Shelf