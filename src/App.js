import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Form from './Components/bmi-class/Form';
import Table from './Components/pagination/Table';
import UnstyledTable from './Components/pagination/TablePagination';
import FormF from './Components/bmi-function/FormF';
import Tours from './Components/tourism/Tours';
import {Routes, Route , Navigate , useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react';
import TourDetails from './Components/tourism/TourDetails';
import Home from './Components/Pages/Home';
import Books from './Components/books/Books';
import BooksData from './Components/books/data.json';

function App() {
  const students = [{
    "id": 1,
    "first_name": "Robinet",
    "last_name": "Simkin",
    "email": "rsimkin0@stanford.edu",
    "gender": "Female"
  }, {
    "id": 2,
    "first_name": "Keane",
    "last_name": "Cowlas",
    "email": "kcowlas1@pcworld.com",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Kelila",
    "last_name": "Soanes",
    "email": "ksoanes2@chron.com",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Levon",
    "last_name": "Bickardike",
    "email": "lbickardike3@un.org",
    "gender": "Male"
  }, {
    "id": 5,
    "first_name": "Candra",
    "last_name": "Leng",
    "email": "cleng4@opensource.org",
    "gender": "Female"
  }, {
    "id": 6,
    "first_name": "Shirleen",
    "last_name": "Cottham",
    "email": "scottham5@google.ru",
    "gender": "Female"
  }, {
    "id": 7,
    "first_name": "Aleta",
    "last_name": "Cometto",
    "email": "acometto6@gravatar.com",
    "gender": "Female"
  }, {
    "id": 8,
    "first_name": "Jimmie",
    "last_name": "Braunter",
    "email": "jbraunter7@ucoz.com",
    "gender": "Male"
  }, {
    "id": 9,
    "first_name": "Blithe",
    "last_name": "Arrundale",
    "email": "barrundale8@vimeo.com",
    "gender": "Female"
  }, {
    "id": 10,
    "first_name": "Jervis",
    "last_name": "Hambly",
    "email": "jhambly9@buzzfeed.com",
    "gender": "Agender"
  }];

  const [curTour , setCurTour] = useState({});
  const [curForm , setCurForm] = useState('func');
  const [books, setBooks] = useState([]);

  const navi = useNavigate();

  const showTourDetail = (place) => {
    setCurTour(place);
    navi('/tourism/detail');
  }

  const toggleForm = () => {
    if(curForm == 'func') {
      setCurForm('class');
    } 
    else {
      setCurForm('func');
    }
  }

  console.log(BooksData);

  useEffect(() => {
    setBooks(BooksData.eBooks);
  }, [])

  function handelSearch(e) {

    const result = BooksData.eBooks.filter(b => { return b.language.toLowerCase().includes(e.toLowerCase()) });
    setBooks(result)
  }


  return (
    <>
      <Header name="Ahmed" age="22" handelSearch={handelSearch}/>
      <Routes >   
        <Route exact path='/' element={<Home />} />
        <Route exact path='/bmi-calc' element={curForm==='func' ? <FormF toggleForm={toggleForm}/> : <Form toggleForm={toggleForm}/>} />
        {/* <Route exact path='/table-pagination' element={<Table data={students} />} /> */}
        <Route exact path='/table-pagination' element={<UnstyledTable />} />
        <Route exact path='/tourism' element={<Tours func ={showTourDetail}/>} />
        <Route exact path='/tourism/detail' element={<TourDetails place ={curTour}/>} />
        <Route exact path='/books' element={<Books books={books}/>} />
      </Routes>
      <Footer year='2022'/> 
    </>
  );
}

export default App;

// import React, { Component } from 'react';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from './Components/Pages/Home';
// import About from './Components/Pages/About';
// import Contact from './Components/Pages/Contact';
// import './App.css';

// class App extends Component {
// render() {
// 	return (
// 	<Router>
// 		<div className="App">
// 			<ul className="App-header">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About Us</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact Us</Link>
//         </li>
// 			</ul>
// 		<Routes>
// 				<Route exact path='/' element={<Home />}></Route>
// 				<Route exact path='/about' element={<About />}></Route>
// 				<Route exact path='/contact' element={<Contact />}></Route>
// 		</Routes>
// 		</div>
// 	</Router>
// );
// }
// }

// export default App;
