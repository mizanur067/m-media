import React from 'react'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import UserSignUp from './UserSignUp'
const Allpages = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user-signup' element={<UserSignUp/>}/>
                
            </Routes>
        </Router>
    </div>
  )
}

export default Allpages