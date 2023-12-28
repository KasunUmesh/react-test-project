/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Card from '../components/card/card';
import axios from 'axios';

interface Data {
  id: number,
  title: string,
  body: string
}


function Home(): JSX.Element {


  const[data, setData] = useState<Data[]>([]);

  /**
   * fetch article data
   */

  const fetchData = (): void => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(Response => {
      setData(Response.data);
    }).catch(err => {
      alert(err);
    })
  }

  // componentDidMount(): void {
  //     this.fetchData();
  // }


  useEffect(() => {
    fetchData();
  }, []);

  return(
      <section>
        <div
          className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>

          {
           data.map((r: Data, index: number) => {
            return <Card title={r.title} content={r.body}/>
           })
          }

        </div>
      </section>
    );
  

}

export default Home;