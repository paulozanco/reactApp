import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>

        </div>
      </Router>
    )
  }
}

export default App;

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home...</h1>
      </div>
    )
  }
}

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About...</h1>
      </div>
    )
  }
}

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact...</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
