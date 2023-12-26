/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

class App extends React.Component<any, any> {

  state = {
    count: 0,
    visible: true
  };

  up = (): void => {
    
    this.setState({count: this.state.count + 1});

  }

  down = (): void => {
    
    this.setState({count: this.state.count - 1});

  }

  render() {
    return(

      <div className={"m-5"}>
        <button className={"inline bg-green-600 px-5"} onClick={this.up}>+</button>
        <div className={"inline mx-5 font-bold"}>{this.state.count}</div>
        <button className={"inline bg-red-600 px-5"} onClick={this.down}>-</button>
      </div>

    );     
  }
  
}

export default App
