import React from 'react';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from './header';
import Footer from './footer';
import Home from './home';
import Post from './post';
import Profile from './profile';
import Main from './main';
import Details from'./deatils';

const App =()=>{
    return(
        <BrowserRouter>
        <Header/>
        <div className='container'>
       <Routes>
        <Route path='/' element={<Main/>}/>
        <Route index element={<Home/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/post/:topic' element={<Details/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
        <Route/>
       </Routes>
       </div>
        <Footer/>
        </BrowserRouter>
    
    )

}
export default App;