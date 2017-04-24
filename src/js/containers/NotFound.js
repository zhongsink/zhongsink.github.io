import React, { Component } from "react";
import NProgress from 'nprogress';
import { Link } from "react-router"; 


import "../../css/404.less";
export default class Notfound extends Component {

    constructor(props) {
        super(props);
        this.state={
            time:10
        }
    }

    componentDidMount() {
        NProgress.done();
        const timer=setInterval(()=>{
            this.setState({time:this.state.time-1});
            if(this.state.time===0 ){
                this.props.history.push({passname :"/"});
                clearInterval(timer);
            }
        },1000);
    }

    render() {

        return (
            <div className="page">

                <div className="notfound">
                    <img className="Page404" src={require("../../img/404.png")} alt="404 NOT FOUND" />
                </div>
                <div className="returnHome">
                    {this.state.time} 秒后跳转到主页面 
                    <Link to="/">立即跳转</Link>
                </div>

            </div>

        )

    }

}