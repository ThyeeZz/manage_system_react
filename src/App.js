import React from 'react';
import Login from './views/Login/index.jsx';
import Home from './views/Home';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import './App.css';
import {
  connect
} from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.props.changeLanguageReducer.lang)
  }

  render() {
    return ( 
      <div className = "App" >
        <Router>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
        </Router>
      </div>
    );
  }

}

// mapStateToProps
const mapStateToProps = state => {
  return state
}

// app 组件接收改变后的state，所以要实现 connect函数的第一个参数
export default connect(mapStateToProps)(App);