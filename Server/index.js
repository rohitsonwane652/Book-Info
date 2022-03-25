const express = require('express');
require('dotenv').config();
const Bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT ;


app.use(Bodyparser.json());
app.use(cors());

let books = [
    {
        "isbn":'isbn1',
        "name":'name1',
        "author":'author1',
        "price":'price1'
    },
    {
        "isbn":'isbn2',
        "name":'name2',
        "author":'author2',
        "price":'price2'
    },
    {
        "isbn":'isbn3',
        "name":'name3',
        "author":'author3',
        "price":'price3'
    }
];


app.get('/',(req,res)=>{
    res.send('Hello World');
});

//Add Book
app.post('/book',(req,res)=>{
    const newBook = req.body;
    books.push(newBook);

    res.send({
        success:"succesfull",
        message:"added succesfully",
        data:newBook
    });
});

//Get All the books
app.get('/book',(req,res)=>{
    res.send({
        status:"succesfull",
        data:books
    });
});


//Get Book by isbn
app.get('/book/search/:isbn',(req,res)=>{
    const isbn = req.params.isbn;
    let isFound = false;
    let newBook;
    for(let i=0;i<books.length;i++){
        if(books[i].isbn === isbn){
            newBook = books[i];
            isFound = true;
            break;
        }
    }
    res.send({
        sucess: isFound?"Sucess":"Not Sucess",
        found:isFound?`Book is found at ${isbn}`:"Book is not found",
        data:newBook
    })
    
});


//delete book by isbn
app.post('/book/:isbn',(req,res)=>{
    const isbn = req.params.isbn;
    const newBook = books.filter(book => book.isbn != isbn);
    books = newBook;

    res.send({
        message: `${isbn} deleted succesfully`,
        data: books
    })
});

//update by isbn 
app.post('/book/update/:isbn',(req,res)=>{
    const isbn = req.params.isbn;
    let isFound = false;
    let isUpdate = false;
    const newBook = {
        isbn: isbn,
        name: req.body.name,
        author: req.body.author,
        price: req.body.price
    }
    for(let i=0;i<books.length;i++){
        if(books[i].isbn === isbn){
            books[i] = newBook;
            isFound = isUpdate = true;
            break;
        }
    }
    res.send({
        status : isFound ? "Book is found" : "Book is not found",
        update:isUpdate ? "Book is updated" : "Book not found",
        data:books
    })
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
});

app.listen(PORT,(req,res)=>{
    console.log(`Server Started at ${PORT}`)
});