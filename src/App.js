
import React, { useState } from "react";
import './index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Details from './components/Details'
import Project from './components/Project'
import Contact from './components/Contact'
import { Link,Routes, Route } from "react-router-dom";


function App() {
  const [isChanged,setChange] = useState("");
  
  return (
    
    <div className="bg">
    <div className="App">
      <Header class="header" >
          
      </Header>
      <main>
        <Routes>
            <Route path="/" >
              <Home></Home>
            </Route>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Details" element={<Details />}/>
            <Route path="/Project" element={<Project />} />
            {/* <Route path="/cart" element={<Cart />} />  */}
          </Routes>
      </main>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
