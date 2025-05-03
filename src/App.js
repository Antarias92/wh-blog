import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import AddItem from './pages/AddItem';
import Banner from './pages/Banner';
import Lore from './Categories/Lore';
import FortyKFAQ from './Categories/FortyKFAQ'; //ignore this error. There is no error and everything functions correctly.
import Misc from './Categories/Misc';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Navbar><Home/></Navbar>}></Route>
          <Route path="/register" element={<Banner><Register/></Banner>}></Route>
          <Route path="/wh-blog" element={<Banner><Login/></Banner>}></Route>
          <Route path="/fortyKFAQ" element={<Navbar><FortyKFAQ/></Navbar>}></Route>
          <Route path="/lore" element={<Navbar><Lore/></Navbar>}></Route>
          <Route path="/misc" element={<Navbar><Misc/></Navbar>}></Route>
          <Route path="/additem" element={<Navbar><AddItem/></Navbar>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );  
}

export default App;
