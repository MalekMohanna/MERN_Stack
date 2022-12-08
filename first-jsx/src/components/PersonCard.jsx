import React, { Component } from 'react'

export default class PersonCard extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.firstName}, {this.props.lastName}</h1>
        <h2>Age : {this.props.age} </h2>
        <h2>Hair color : {this.props.color} </h2>
      </div>
    )
  }
}