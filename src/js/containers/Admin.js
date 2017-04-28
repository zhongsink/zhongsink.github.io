import React,{Component} from "react";
import LoginForm from "../components/LoginForm"
import Manage from "./Manage";
class Admin extends Component {

    constructor(props){
        super(props);

        this.state={
            login:false
        }
    }
    signIn(){
        this.setState({login:!this.login});
    }
    render(){

        return (
            <div>
                { this.state.login ? <Manage /> : <LoginForm signIn={this.signIn.bind(this)} /> } 
            </div>
        )
    }


}



export default Admin;