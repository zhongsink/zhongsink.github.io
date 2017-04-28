import React, { Component } from "react";
import Marked from "./Marked";

export default class BlogForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="blogForm">
                <div className="title">
                    文章标题：<input type="text" name="title" placeholder="标题" />
                </div>
                <div className="title">
                    文章标签：<input type="text" name="lable" placeholder="标签" />
                </div>
                <Marked />
                <div className="btnCon">
                    <button className="btn" >提交</button>
                </div>
            </div>
        )
    }

}