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
      state: 'chatMessages',
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
    let item = ReactDOM.findDOMNode(this.refs.input).value;
    this.setState({
      todoList: this.state.todoList.concat([item])
    });
  }
  render(){
    let items = this.state.todoList.map((item, idx) => {
      return (<li key={idx}>{item}</li>);
    });
    return(
      <div>
        <div className="row" style={{marginBottom: '0em'}}>
          <div className="col s9 push-s3">
            <h3 style={{marginBottom: '0em'}}>Chat with: 'Insert Name Here'</h3>
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <div className="collection">
              <a href="#" className="collection-item">Test<span className="new badge">4</span></a>
            </div>
          </div>
          <div className="col s9 container">
            <ul className="collection">
              <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons">insert_chart</i>
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle red">play_arrow</i>
                <span className="title">Title</span>
                <p>First Line <br/>
                   Second Line
                </p>
                <a href="#!" classNameName="secondary-content"><i className="material-icons">grade</i></a>
              </li>
            </ul>
          </div>
          <div className="input-field col s9 push-s3">
            <form>
              <input id="chatInput" type="text" className="validate" />
              <label htmlFor="chatInput">New Message</label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
// <form onSubmit={this.handleSubmit.bind(this)}>
//   <input ref="input" />
//   <button type="submit">Submit</button>
// </form>
// <ul>
//   {items}
// </ul>
