/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

class Card extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      
      <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
      <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
      <p className={"my-5"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nihil suscipit officiis dignissimos minus eius ratione sed quibusdam, harum sit reiciendis dolore reprehenderit quae quis non veniam? Commodi, dolores quos.</p>
      <button className={"bg-green-600 p-2 text-white"}>Read More...</button>
    </div>
    
    );
  }

}

export default Card;
