import React ,{Component} from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import  {CONFIG}  from "../constants/Config";

class FixSlide extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (

            <div className="fixSlide">
                 <div className="page fixContainer">
                    <Header />
                    <Nav items={CONFIG.BLOG}/>
                 </div>
            </div>
        )

    }

}

export default FixSlide;