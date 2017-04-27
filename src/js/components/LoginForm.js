import React, { Component } from "react";

import "../../css/Login.less";
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className="row">
                <div className="loginpanel">
                    <i classID="loading" className="hidden fa fa-spinner fa-spin bigicon"></i>
                    <h2>
                        <span className="fa fa-quote-left "></span> 登录 <span className="fa fa-quote-right "></span>
                    </h2>
                    <div className="loginform">
                        <input type="text" placeholder="登录账号" onKeyPress='' />
                        <input type="password" placeholder="输入密码" onKeyPress='' />
                        <div className="buttonwrapper">
                            <button className="btn loginbutton">
                                <img src={require("../../img/true.svg")} alt=""/>
                            </button>
                             <button className="btn lockbutton">
                                <img src={require("../../img/lock.svg")} alt=""/>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}



export default LoginForm;