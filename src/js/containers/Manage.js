import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Cell from "../components/Cell";
import FigureCon from "../components/FigureCon";
import BlogForm from "../components/BlogForm";
import ProjectForm from "../components/ProjectForm";

import "../../css/manage.less";
let item = [
    {
        hash: "sds34",
        title: '函数防抖与函数节流',
        created_at: '2016-08-19T08:54:33Z'
    }];
const array = [
    {
        user: "admin",
        url: "https://zhongsink.github.io",
        ImgUrl: "http://120.25.221.52/images/project.png",
        title: "个人主页",
        githubURL: "https://github.com/zhongsink/zhongsink.github.io",
        tags: ["blog"],
        createAt: "2017-4-15"
    },
]

Date.prototype.Format = function(fmt)   {   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  

class Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    Click() {
        this.setState({ show: !this.state.show });
    }
    render() {
        let items = this.props.items && this.props.items.length >0 ? this.props.items : item; 
        let arrays = this.props.projectitems && this.props.projectitems.length >0 ? this.props.projectitems :array;
        return (
            <div className="manageCon">
                <div className="manageHeader">
                    <h2>个人主页后台管理</h2>
                    <div className="user">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" onClick={this.Click.bind(this)}>
                                <i className="fa fa-user fa-fw"><img src={require("../../img/user.svg")} alt="" /></i>
                                <i className="fa fa-caret-down"><img src={require("../../img/i.svg")} alt="" /></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user " style={{ display: this.state.show ? "" : "none" }}>
                                <li>
                                    <a href="#"><i className="fa fa-user fa-fw"><img src={require("../../img/user.svg")} alt="" /></i>用户信息</a>
                                </li>
                                <li>
                                    <a href="/"><i className="fa fa-sign-out fa-fw"><img src={require("../../img/loginout.svg")} alt="" /></i>登出</a>
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
                <div className="manageMain">
                    <Tabs>
                        <TabList>
                            <Tab>博客管理</Tab>
                            <Tab>项目管理</Tab>
                            <Tab>写博客</Tab>
                            <Tab>上传项目</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>博客管理</h2>
                            <ul>
                                {
                                    items.map((item, index) =>
                                        <Cell {...item} key={index} />
                                    )
                                }
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <h2>项目管理</h2>
                            {
                                arrays.map((item, index) =>
                                    <FigureCon {...item} key={index} />
                                )
                            }
                        </TabPanel>
                        <TabPanel>
                            <h2>写博客</h2>
                            <BlogForm />
                        </TabPanel>
                        <TabPanel>
                            <h2>上传项目</h2>
                            <ProjectForm />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Manage;