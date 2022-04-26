import React from 'react'
import {update} from "./../BooksAPI"


const SelectShelf = ({book, updateLibrary}) => {
        

        return (
        <select defaultValue={`${book.shelf}`} onChange={
                (e) => {
            update(book, e.target.value);
            updateLibrary()
                }
}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
        </select>
)

}
export default SelectShelf