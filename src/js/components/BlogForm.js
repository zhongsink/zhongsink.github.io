import React, { Component } from "react";
import Marked from "./Marked";
import { CONFIG } from "../constants/Config.js";
import fetch from "node-fetch";

export default class BlogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            created_at: (new Date()).Format("yyyy-MM-dd hh:mm:ss.S"),
            updated_at: (new Date()).Format("yyyy-MM-dd hh:mm:ss.S"),
            labels: "",
            hash: new Date().getTime(),
            title: "",
            send: false,
            success: false,
            error: false
        }
    }

    changeState(str) {
        // const self=this;
        return (event) => {
            this.state[str] = event.target.value;
            this.forceUpdate();
            console.log(this.state);
        }
    }
    parse(state) {
        return "body=" + encodeURIComponent(this.state.body) + "&created_at=" + this.state.created_at + "&updated_at="
            + this.updated_at + "&labels=" + encodeURIComponent(this.state.labels) + "&hash=" + this.state.hash +
            "&title=" + encodeURIComponent(this.state.title)
    }
    sendForm() {
        const self = this;
        this.setState({ send: true, error: false, success: false });

        fetch(CONFIG.Request.url + "insertItem", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: this.parse(this.state)
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (JSON.parse(json).success) {
                self.setState({ success: true, send: false, error: false });
            }
            else {
                self.setState({ error: true, send: false, success: false });
            }
        });

    }
    render() {
        return (
            <div className="blogForm">
                <div className="title">
                    文章标题：<input type="text" name="title" placeholder="标题" onChange={this.changeState("title").bind(this)} />
                </div>
                <div className="title">
                    文章标签：<input type="text" name="labels" placeholder="标签" onChange={this.changeState("labels").bind(this)} />
                </div>
                <Marked change={this.changeState("body").bind(this)} />
                <div className="btnCon">
                    <button className="btn" onClick={this.sendForm.bind(this)} >提交</button>
                    {this.state.send ? "正在发送中" : ""}
                    {this.state.success ? "发送成功" : ""}
                    {this.state.error ? "发送失败" : ""}
                </div>
            </div>
        )
    }

}