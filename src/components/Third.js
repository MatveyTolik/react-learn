import React, { PureComponent } from 'react';

class Third extends PureComponent {

  constructor(){
    super();
    this.state={
      count:3
    }
  }

  render(){
    console.warn('render');
    return (
      <div className="third">
          <h2>Component number: {this.state.count}</h2>

      </div>
    );
  }
}

export default Third
