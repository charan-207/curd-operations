import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Getusers from './Getusers/Getusers'
import Updateusers from './Updateusers/Updateusers'
import Adduser from './Addusers/Adduser'




function App() {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Getusers />}></Route>
        <Route path='/updateusers/:id' element={<Updateusers />}></Route>
        <Route path='adduser' element={<Adduser />}></Route>

      </Routes>

    </div>

  )
}

export default App