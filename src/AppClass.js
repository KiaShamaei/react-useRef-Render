import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { About } from './About';

import './App.css';
import {ChildAMemo} from './Component/ChildA';
import {ChildA} from './Component/ChildA';



class App extends Component {
  state={
    count : 0, 
    city: "tehran"
  }
  constructor(){
    super()
    console.log("this is from constructor ...")
  }
  componentDidMount=()=>{
    console.log("this is from component did mount")

  }
  shouldComponentUpdate=()=>{
    console.log("this is from should shouldupdate")
    return true
  }
  componentDidUpdate=()=>{
    console.log("this is from didupdate")
  }
  componentWillUnmount=()=>{
    console.log("this is from Unmount...")
  }
  getSnapshotBeforeUpdate= (prevProps , prevState) =>{
    console.log("this is from getsnapShot : " ,prevState )
    return true
  }
   add= ()=>{
    this.setState({count : this.state.count + 1})
  }
  changeCity = () =>{
    this.setState({...this.state , city : "newCity"})
  }
  render(){
    console.log("this is in render part...")
    return(
      <>
      <h2>this is app page ! {this.state.count}</h2>
      <button onClick={this.add}>add</button>
      <Link to={'/about'}>About</Link>
      <ChildA  city={this.state.city} changecity= {this.changeCity} />

      
      </>

    )
  }
}
export default App;




