import React, { Component } from "react";

export default class ProjectForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ProjectForm">
                <form className="title">
                    <div className="formitem">
                        项目标题：<input type="text" name="title" placeholder="标题" />
                    </div>
                    <div className="formitem">
                        项目标签：<input type="text" name="lable" placeholder="标签" />
                    </div>
                    <div className="formitem">
                        项目图片：<input type="file" name="file" placeholder="图片" />
                    </div>
                    <div className="formitem">
                        项目示例：<input type="text" name="url" placeholder="示例url" />
                    </div>
                    <div className="formitem">
                        项目仓库：<input type="text" name="githubUrl" placeholder="github url" />
                    </div>

                    <div className="btnCon">
                        <button className="btn" >提交</button>
                    </div>
                </form>
            </div>
        )
    }

}