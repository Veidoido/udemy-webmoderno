import React from 'react'
import { Routes, Route } from "react-router-dom";


import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => 
    <Routes>
        <Route exact path='/' component={<Home />} />
        <Route path='/users' component={<UserCrud/>} />
        <Route path='*' element={<Home />} />
    </Routes>