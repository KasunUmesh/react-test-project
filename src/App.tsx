/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Card from './components/card/card';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

class App extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {

    return(
      <div>

        <Header/>

        <section>

          <div className={"grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto"}>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>


          </div>

         

        </section>

        <Footer/>

      </div>
    );
      
  }
  
}

export default App
