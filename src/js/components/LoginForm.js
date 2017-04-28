import React, { Component } from "react";

import "../../css/Login.less";
class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading">
                <div className="ball"></div>
                <div className=" ball ball1"></div>
                <div className=" ball ball2"></div>
                <div className="ball ball3"></div>
            </div>
        )
    }
}

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            send:false,
            error:false
        }
    }
    check() {
        if (this.state.username && this.state.password)
            return true;
        else return false;
    }
    changeUserName(event) {
        this.setState({ username: event.target.value,error:false });
    }
    changePassword(event) {
        this.setState({ password: event.target.value,error:false });
    }
    sendForm() {
        console.log(this.state);
        this.setState({ send: true });
        
        const timer=setInterval(()=>{
            // this.setState({ password:null,send: false,error:true });
            this.props.signIn();
            clearInterval(timer);
        },1000);
    }
    render() {

        return (
            <div className="row">
                <div className="loginpanel">
                    <div className="hidden">
                        { this.state.send ? <Loading />:""}
                        {this.state.error ? <p>用户名或密码错误</p>:""}
                    </div>
                    <h2>
                        <span className="fa fa-quote-left "></span> 登录 <span className="fa fa-quote-right "></span>
                    </h2>
                    <div className="loginform">
                        <input type="text" placeholder="登录账号" onChange={this.changeUserName.bind(this)} />
                        <input type="password" placeholder="输入密码" onChange={this.changePassword.bind(this)} />
                        <div className="buttonwrapper">
                            <button className="btn loginbutton" onClick={this.sendForm.bind(this)} style={this.check() ? { left: "0px" } : { left: "-300px" }}>
                                <img src={require("../../img/true.svg")} alt="" />
                            </button>
                            <button className="btn lockbutton" style={this.check() ? { left: "300px" } : { left: "0px" }}>
                                <img src={require("../../img/lock.svg")} alt="" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }


}



export default LoginForm;