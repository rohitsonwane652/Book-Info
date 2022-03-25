import axios from 'axios'
import React from 'react'
import './BookCard.css'
import {Link} from 'react-router-dom'

function BookCard({isbn,name,author,price}) {

    async function deleteBook(isbn){
        const response = await axios.post(`https://my-book-info.herokuapp.com/book/${isbn}`)
        alert(response.data.message);
        console.log("Book Deleted");
    }

  return (
    <div className="row book-card mb-3 ">
        <div className='col-md-8'>
            <h4>ISBN: {isbn}</h4>
            <h4>Name: {name}</h4>
            <h4>Author: {author}</h4>
            <h4>Price: {price}</h4>
        </div>
        <div className='d-flex flex-column col-md-4 '>
            <button className='btn btn-danger mb-3' onClick={()=>{deleteBook(isbn)}}>Delete</button>
            <Link className='btn btn-primary' to={`/book/update/${isbn}`}>Update</Link>
        </div>
    </div>
  )
}

export default BookCard