import React, { Component } from 'react';

export default class Page3 extends Component {
  render () {
    console.log(this.props)
    return (
      <div>Page 3 with id params of: { this.props.match.params.id }</div>
    );
  }
}
