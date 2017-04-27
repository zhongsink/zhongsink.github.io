import React,{Component} from "react";
import LoginForm from "../components/LoginForm"

class Admin extends Component {

    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div>
                <LoginForm />
            </div>
        )
    }


}



export default Admin;