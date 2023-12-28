/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Login from './views/login';
import Home from './views/home';
import Signup from './views/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from './views/editor';
import Article from './views/article';


class App extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {

    return(
      <div>

       <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/signin"} element={<Login/>} />
          <Route path={"/signup"} element={<Signup/>}/>
          <Route path={"/editor"} element={<Editor/>}/>
          <Route path={"/article"} element={<Article/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>

      </div>
    );
      
  }
  
}

export default App
