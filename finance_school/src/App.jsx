
// App.jsx (Corrected)
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
 import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
 

function App() {
  return (
    <div>
    
       





  
   
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
        
         
       </div>  
        
    
   
    
  );
}

       
     
  


export default App;
