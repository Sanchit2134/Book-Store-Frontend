import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './home/Home'
import Contact from './components/Contact'
import About from './components/About'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <div className='bg-white text-black dark:bg-slate-950 dark:text-white'>
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses/>:<Navigate to='/signup'/>} />   {/* have to protect this route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <Toaster/>
    </div>  
  )
}
export default App