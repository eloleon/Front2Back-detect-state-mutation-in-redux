import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render () {
    return (
      <div className="navigation">
        <Link to="/">Home Page</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3 with :id param</Link>
      </div>
    );
  }
}
