import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Category1 from './pages/Category1';
import AddItem from './pages/AddItem';
import Banner from './pages/Banner';
import Lore from './Categories/Lore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/wh-blog" element={<Navbar><Home/></Navbar>}></Route>
          <Route path="/register" element={<Banner><Register/></Banner>}></Route>
          <Route path="/login" element={<Banner><Login/></Banner>}></Route>
          <Route path="/lore" element={<Navbar><Lore/></Navbar>}></Route>
          <Route path="/additem" element={<Navbar><AddItem/></Navbar>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );  
}

export default App;
