import React from 'react'
import {update} from "./../BooksAPI"


const SelectShelf = ({book, updateLibrary}) => {
        function handleChange(event) {
            update(book, event.target.value).then(updateLibrary);
        }
    
        return (
            <select defaultValue={`${book.shelf}`} onChange={handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
            </select>
    )
    
    }
    
export default SelectShelf