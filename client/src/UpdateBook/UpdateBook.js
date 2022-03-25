import React,{useState,useEffect} from 'react'
import './Updatebook.css'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'

function UpdateBook() {
  const [bookData,setBookData]=useState(
    {
      isbn:"",
      name:"",
      author:"",
      price:""
    }
  );
  const {isbn} = useParams();
  const navigate = useNavigate();
   

  useEffect(()=>{
      async function getBook(){
        const response = await axios.get(`https://my-book-info.herokuapp.com/book/search/${isbn}`);
        setBookData(response.data.data);
      }
      getBook();
    },[isbn]);

    const updateBook = async ()=>{
        await axios.post(`https://my-book-info.herokuapp.com/book/update/${isbn}`,bookData);
        navigate('/');
    }
  
  return (
    <div className="container">
      <h1 className="text-center m-3 p-3">Update Book</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form className="addbook-form">
              <div className="mb-3">
                <label htmlFor="isbn" className="form-label">Enter ISBN Number</label>
                <input type="text" className="form-control" value={bookData.isbn} id="isbn" onChange={(e)=>{setBookData({...bookData, isbn: e.target.value})}} disabled/>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Enter Book Title</label>
                <input type="text" className="form-control" id="title" value={bookData.name} onChange={(e)=>{setBookData({...bookData, title: e.target.value})}} />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Enter Author Name</label>
                <input type="text" className="form-control" id="author" value={bookData.author} onChange={(e)=>{setBookData({...bookData, author: e.target.value})}} />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Enter Price</label>
                <input type="text" className="form-control" id="price" value={bookData.price} onChange={(e)=>{setBookData({...bookData, price: e.target.value})}} />
              </div>

              <button type="button" className="btn btn-primary w-100 mt-3" onClick={updateBook}>Update Book</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateBook