import React, { Component } from 'react'

export default class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      newAge : props.age,
    }
  }

  increase =()=>{
    this.setState({newAge:(this.state.newAge)+1});
  }

  render() {
    return (
      <div>
        <h1> {this.props.firstName}, {this.props.lastName}</h1>
        <h2>Age : {this.state.newAge} </h2>
        <h2>Hair color : {this.props.color} </h2>
        <button onClick={this.increase} >Increase age</button>
      </div>
    )
  }
}