/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

class App extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {

    return(
      <div>

        <header>
          <nav className={"flex justify-between items-center bg-green-100 p-5 shadow-sm"}>
            <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={"w-[50px]"}/>
            <ul className={"flex gap-[4vw]"}>
              <li>Article</li>
              <li>Your Articles</li>
              <li>Write New Article</li>
              <li>Create An Account / Login</li>
            </ul>
          </nav>
        </header>

        <section>

          <div className={"grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto"}>

             {/*Card*/}
          <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
            <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
            <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
            <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
          </div>

           {/*Card*/}
           <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
            <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
            <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
            <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
          </div>

           {/*Card*/}
           <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
            <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
            <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
            <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
          </div>

           {/*Card*/}
           <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
            <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
            <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
            <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
          </div>

           {/*Card*/}
           <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
            <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
            <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
            <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
          </div>

           {/*Card*/}
           <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
            <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
            <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
            <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
          </div>

           {/*Card*/}
           <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
            <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
            <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
            <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
          </div>


          </div>

         

        </section>

        <footer className={"bg-teal-950 text-white p-5"}>
        <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={"w-[50px]"}/>
        <ul className={"mt-5"}>
          <li>123D, Flower Rd, Colombo</li>
          <li>+94 77 777 7777</li>
          <li>+94 38 777 7777</li>
          <li>info@blog.lk</li>
        </ul>
        <div className={"mt-5 text-center"}>Copyright © 2023 Blog LK</div>
        </footer>

      </div>
    );
      
  }
  
}

export default App
