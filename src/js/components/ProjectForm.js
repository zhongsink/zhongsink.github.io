import React, { Component } from "react";
import { CONFIG } from "../constants/Config.js";
// import fetch from "node-fetch";
import $ from 'jQuery';

export default class ProjectForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "admin",
            url: "",
            Img: null,
            title: "",
            githubURL: "",
            tags: null,
            createAt: (new Date()).Format("yyyy-MM-dd hh:mm:ss.S").substr(0, 10),
            send: false,
            success: false,
            error: false
        }
    }

    changeState(str) {
        return (event) => {
            this.state[str] = event.target.value;
            this.forceUpdate();
            // console.log(this.state);
        }
    }
    sendForm(e) {
        e.preventDefault();
        e.stopPropagation();
        let form = document.getElementById("formdata");
        let data = new FormData(form);

        console.log(data.get("url"), data.get("img"));

        const self = this;
        this.setState({ send: true, error: false, success: false });

        $.ajax({
            url: CONFIG.Request.url + "insertProject",
            type: 'POST',
            cache: false,
            data: data,
            processData: false,
            contentType: false
        }).done(function (json) {
            if (JSON.parse(json).success) {
                self.setState({ success: true, send: false, error: false });
            }
        }).fail(function (json) {
            console.log(json);
            self.setState({ error: true, send: false, success: false });
         });
        // fetch(CONFIG.Request.url + "insertProject", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'multipart/form-data;charset=utf-8'
        //     },
        //     body: data
        // }).then(function (res) {
        //     return res.json();
        // }).then(function (json) {
        //     if (JSON.parse(json).success) {
        //         self.setState({ success: true, send: false, error: false });
        //     }
        //     else {
        //         self.setState({ error: true, send: false, success: false });
        //     }
        // });

    }

    render() {
        return (
            <div className="ProjectForm">
                <form id="formdata" className="title " onSubmit={this.sendForm.bind(this)} method="POST" action={CONFIG.Request.url + "insertProject"} enctype="multipart/form-data" >
                    <div className="formitem">
                        项目标题：<input type="text" name="title" placeholder="标题" onChange={this.changeState("title").bind(this)} />
                    </div>
                    <div className="formitem">
                        项目标签：<input type="text" name="tags" placeholder="标签" onChange={this.changeState("tags").bind(this)} />
                    </div>
                    <div className="formitem">
                        项目图片：<input type="file" ref="img" name="img" placeholder="图片" onChange={this.changeState("Img").bind(this)} />
                    </div>
                    <div className="formitem">
                        项目示例：<input type="text" name="url" placeholder="示例url" onChange={this.changeState("url").bind(this)} />
                    </div>
                    <div className="formitem">
                        项目仓库：<input type="text" name="githubURL" placeholder="github url" onChange={this.changeState("githubURL").bind(this)} />
                    </div>

                    <div className="btnCon">
                        <input className="btn" type="submit" value="Submit" />
                        {this.state.send ? "正在发送中" : ""}
                        {this.state.success ? "发送成功" : ""}
                        {this.state.error ? "发送失败" : ""}
                    </div>
                </form>
            </div>
        )
    }

}