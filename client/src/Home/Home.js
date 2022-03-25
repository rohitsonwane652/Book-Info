import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './../BookCard/BookCard'

function Home() {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(`http://localhost:5000/book`);
            setBooks(response.data.data); 
        }
        fetchData();
    },[books]);


  return (
    <div>
        <h1 className='text-center'>Book Info</h1>
        <div className='container'>
        { 
            books.length !==0 ?
            books.map((book)=>{return(<BookCard key={book.isbn} isbn={book.isbn} name={book.name} author={book.author} price={book.price} />)})
            :<><h2>There are no books</h2><Link to="/addBook" className="btn btn-primary" >Add Book</Link></>
        }
        </div>
    </div>
  )
}

export default Home