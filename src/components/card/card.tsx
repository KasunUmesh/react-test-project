/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string,
  content: string
}

function Card(props: Props): JSX.Element {

  const navigate = useNavigate();
  
    return(
      
      <div className={"w-72 p-5 border-solid border-2 m-5 shadow-lg"}>
        <h1 className={"text-2xl font-bold"}>{props.title}</h1>
        <p className={"my-5"}>{props.content}</p>
        <button className={'main-btn'} onClick={() => navigate('/article', {state: {title: props.title, description: props.content}})}>Read More...</button>
      </div>
    
    );
  
}

export default Card;
