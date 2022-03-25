import React,{useState} from 'react'
import './AddBook.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddBook() {
  const[bookData,setBookData]=useState([
    {
      isbn:'',
      name:'',
      author:'',
      price:''
    }
  ]);
   
  const navigate = useNavigate();

    async function addBook(){
    const response = await axios.post(`https://my-book-info.herokuapp.com/book`,bookData);
    {
      alert(response.data.message);
      navigate("/");
    }
  }
  
  return (
    <div className="container">
      <h1 className="text-center m-3 p-3">Add Book</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form className="addbook-form">
              <div className="mb-3">
                <label htmlFor="isbn" className="form-label">Enter ISBN Number</label>
                <input type="text" className="form-control" id="isbn" onChange={(e)=>{setBookData({...bookData, isbn: e.target.value})}} />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Enter Book Title</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>{setBookData({...bookData, name: e.target.value})}} />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Enter Author Name</label>
                <input type="text" className="form-control" id="author" onChange={(e)=>{setBookData({...bookData, author: e.target.value})}} />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Enter Price</label>
                <input type="text" className="form-control" id="price" onChange={(e)=>{setBookData({...bookData, price: e.target.value})}} />
              </div>

              <button type="button" className="btn btn-primary w-100 mt-3" onClick={addBook}>Add Book</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBook