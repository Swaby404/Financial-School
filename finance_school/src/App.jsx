
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import About from './components/AboutUs.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  return (
      <div>
        <Nav />
        <Home />
        

         
 






      <Footer />
    </div>
    
  )
}
<Router>
<Routes>
        <Route exact path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
                <Route
                    path="/Contact"
                    element={<Contact />}
/>
  </Routes>
    </Router>

export default App
  

 
 