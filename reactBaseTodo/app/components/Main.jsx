import React from 'react';
import ReactDOM from 'react-dom';
import Rebase from 're-base';

let base = Rebase.createClass('https://reactbasetodo.firebaseio.com');

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
      loading: true
    };

  }
  componentDidMount(){
    this.ref = base.syncState('items', {
      context: this,
      state: 'todoList',
      asArray: true,
      then(){
        this.setState({loading: false});
      }
    });
  }
  componentWillUnmount(){
  }
  handleSubmit(e){
    e.preventDefault();
    let item = ReactDOM.findDOMNode(this.refs.newItem).value;
    this.setState({
      todoList: this.state.todoList.concat([item])
    });
    ReactDOM.findDOMNode(this.refs.newItem).value = '';
  }
  render(){
    let items = this.state.todoList.map((item, idx) => {
      return (
        <li className="collection-item" key={idx}>
          <span className="title">{item}</span>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      );
    });
    return(
      <div className="row container">
        <div className="input-field col s12">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input id="newItem" ref="newItem" type="text" className="validate" />
            <label htmlFor="newItem">New Item</label>
          </form>
        </div>
        <div className="col s12">
          <ul className="collection">
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
// <form >
//   <input ref="input" />
//   <button type="submit">Submit</button>
// </form>
// <ul>
//   {items}
// </ul>
