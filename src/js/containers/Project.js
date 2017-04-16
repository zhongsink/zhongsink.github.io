import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"
class Project extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="flex row-flex">
                <FixSlide />
                <div className="contence" >
                    
                </div>
            </div>
        )

    }

}
export default Project;