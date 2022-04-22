import React from 'react'
import {update} from "./BooksAPI"

const SelectShelf = ({book}) => {
return (
    <div className="book-shelf-changer">
        <select defaultValue={`${book.shelf}`} onChange={(event) => {
            // remove book from current shelf and add to the selected shelf
            update(book, event.target.value);
            }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
        </select>
    </div>
)

}

export default SelectShelf