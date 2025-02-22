import SelectShelf from "./SelectShelf.js"


const BookCard = ({book, updateLibrary}) => {
return (
    <li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks ? (
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}` }}></div>
          ) : (
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://www.kerrylonsdale.com/wp-content/uploads/2015/11/bookcover-placeholder-e1494528547751.png)` }}></div>
          )}
          <div className="book-shelf-changer">
            <SelectShelf book={book} updateLibrary={updateLibrary} /> 
          </div>
        </div>
          {book.title ? (
            <div className="book-title">{book.title}</div>
            ) : (
            <div className="book-title">No Title</div>
            )}
          {book.authors ? (
            <div className="book-authors">{book.authors.join(", ")}</div>
            ) : (
            <div className="book-authors">Unknown Author</div>
            )}
      </div>
    </li>
        );
}

export default BookCard
