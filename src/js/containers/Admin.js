import React, { Component } from "react";
import LoginForm from "../components/LoginForm"
import Manage from "./Manage";
import { signIn } from "../actions/index.js";
import fetch from "node-fetch";
import { connect } from 'react-redux';
import { CONFIG } from "../constants/Config.js";

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
            if(JSON.parse(json).success)
                self.setState({ login: !self.state.login });
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
                {this.state.login ? <Manage  items={this.props.items} projectitems={this.props.projectitems} /> : <LoginForm signIn={this.userSignIn.bind(this)} changeError={this.changeError.bind(this)} error={this.state.error} />}
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
            items: [],
            projectitems:[],
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