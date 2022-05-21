import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import Logout from './pages/Logout';
import Single from './pages/Single';
import ErrorPage from './components/ErrorPage';
function App(props) {

    return <BrowserRouter>
        <Header/>

        <Routes>
            <Route exact path="/"
                element={<Home/>}/>

            <Route exact path="/Login"
                element={<Login/>}/>

            <Route exact path="/Signup"
                element={<Signup/>}/>

            <Route exact path="/Cart"
                element={<Cart/>}/>

            <Route exact path="/Orders"
                element={<Orders/>}/>

            <Route exact path="/Profile"
                element={<Profile/>}/>

            <Route exact path="/Checkout"
                element={<Checkout/>}/>
            <Route exact path="/Logout"
                element={<Logout/>}/>


            <Route exact path="/Single/:id"
                element={<Single/>}/>


            <Route element={<ErrorPage/>}/>

        </Routes>

        <Footer/>
    </BrowserRouter>
}
export default App
