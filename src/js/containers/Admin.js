import React, { Component } from "react";
import LoginForm from "../components/LoginForm"
import Manage from "./Manage";
import { signIn } from "../actions/index.js";
import fetch from "node-fetch";
import { connect } from 'react-redux';
import { CONFIG } from "../constants/Config.js";
const localprojectItems=JSON.parse(localStorage.getItem("projectItems")).reverse();
const localItem=JSON.parse(localStorage.getItem("Items")).reverse();
const localLogin=localStorage.getItem("login");

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: this.props.login,
            error: false ,
        }
    }
    userSignIn(obj) {
        //  const { dispatch } = this.props;
        //  dispatch(signIn(obj));
        // this.setState({ login: !this.state.login });
        const self=this;
        fetch(CONFIG.Request.url + "signin", {
            method: "POST",
            // mode:'cors',
            headers: {
                //  "Access-Control-Allow-Origin":"*",
                 "Content-Type": "application/x-www-form-urlencoded"
            },
            body: obj
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if(JSON.parse(json).success){
                self.setState({ login: !self.state.login });
                localStorage.setItem("login",true);
            }
            else{
                self.setState({ error: !self.state.error });
            }
        });
         
    }
    changeError(){
        this.setState({ error: !this.state.error });
    }
    render() {

        return (
            <div>
                {localLogin||this.state.login ? <Manage  items={localItem || this.props.items} projectitems={localprojectItems ||this.props.projectitems} /> : <LoginForm signIn={this.userSignIn.bind(this)} changeError={this.changeError.bind(this)} error={this.state.error} />}
            </div>
        )
    }


}

function mapStateToProps(state) {
    const {
        user,
        items,
        projectitems,
        login

  } = state || {
            user: "admin",
            items: localItem || [],
            projectitems:localprojectItems||[],
            login:false
        };

    return {
        user,
        items,
        projectitems,
        login
    }
}

export default connect(mapStateToProps)(Admin);