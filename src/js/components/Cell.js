import React, { Component } from 'react';
import {Link} from "react-router";

export default class Cell extends Component {
  render() {
    // console.log(this.props.created_at);
    return (
      <li className="list-post">
        <span className="date-long">{this.props.created_at.substr(0, 10)}</span>
        <Link to={"/blog/post/"+this.props.hash} >{this.props.title}</Link>
      </li>
    );
  }
};