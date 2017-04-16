import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"

class Blog extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="flex row-flex">
                <FixSlide />
                <div className="contence" >
                    {this.props.children}
                </div>
            </div>
        )

    }

}


export default Blog;