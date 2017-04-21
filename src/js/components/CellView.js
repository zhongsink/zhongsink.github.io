/**
 * this.props={
 *       items:[{
 *          hash ： ''
 *          create_at: date
 *          title
 *      }]  
 * }
 */
import React, { Component } from 'react';
import Cell from './Cell.js';
var Pagination = require('rc-pagination');
import 'rc-pagination/assets/index.css';

export default class CellView extends Component {

    constructor(props){
        super(props);
        this.state={
            current:1,
        };
    }

    onChange(page){
        console.log(page,this.state);
        this.setState({
            current: page,
        });
        
    }

  render() {
    let array=this.props.items;
    let items=array.slice((this.state.current-1)*10,(this.state.current-1)*10+10);
    return (
      <div>
        <h2 className="category">归档</h2>
        <ul>
          {
            items.map((item, index) => 
              <Cell {...item} key={index} />
            )
          }
        </ul>
        <Pagination onChange={this.onChange.bind(this)} current={this.state.current} total={array.length} />
      </div>
    );
  }
};