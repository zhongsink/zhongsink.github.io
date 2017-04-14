import React,{Component }from "react";
import SocialList from './SocialList';
class Header extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (

               <header className="animated" >
                    <a className="link" href="/">
                        <img className="selfie" src={require("../../img/head.png")} />
                    </a>
                    <h2>上善若水</h2>
                    <p>人生苦短 码不停蹄</p>
                    <SocialList />
                </header>

            
   
        )
    }

}


export default Header;

