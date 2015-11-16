import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component{
  render(){
    return(
      <div>
        Hello React-dev =)
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
