import React ,{Component} from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
class FixSlide extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (

            <div className="fixSlide">
                 <div className="page container">
                    <Header />
                    <Nav />
                 </div>
            </div>
        )

    }

}

export default FixSlide;