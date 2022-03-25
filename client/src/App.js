import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import AddBook from './AddBook/AddBook'
import UpdateBook from './UpdateBook/UpdateBook';
import SearchBook from './SearchBook/SearchBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/book/update/:isbn" element={<UpdateBook />} />
          <Route path="/search" element={<SearchBook />} />
        </Routes>
       </BrowserRouter> 
   </> 
  );
}

export default App;
