import axios from 'axios';
import React, {useState } from 'react'
import {Link} from 'react-router-dom'
import './SearchBook.css'

function SearchBook() {
    const [isbn,setIsbn] = useState('');
    const[book,setBook] = useState({
        isbn:"",
        name:"",
        author:"",
        price:""
    });
    

    const searchBook = async (e)=>{
        var data = document.getElementById('search-data');
        data.style.display = 'flex';
        e.preventDefault();
        const response = await axios.get(`https://my-book-info.herokuapp.com/book/search/${isbn}`);
        setBook(response.data.data);
    };

  return (
    <div className='container d-flex flex-column align-items-center py-3'>
        <h2>Search Book By ISBN Number</h2>
        <form className="d-flex">
            <input className="form-control me-2" type="text" value={isbn} onChange={e=>setIsbn(e.target.value)} placeholder="Search" />
            <button className="btn btn-outline-success" onClick={searchBook}>Search</button>
        </form>
        <div className="row book-card mt-3" id="search-data">
        <div className='col-md-8'>
            <h4>ISBN: {book.isbn}</h4>
            <h4>Name: {book.name}</h4>
            <h4>Author: {book.author}</h4>
            <h4>Price: {book.price}</h4>
        </div>
        <div className='d-flex flex-column col-md-4 '>
            <Link className='btn btn-primary' to={`/book/update/${isbn}`}>Update</Link>
        </div>
    </div>
    </div>
  )
}

export default SearchBook