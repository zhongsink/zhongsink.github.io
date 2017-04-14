import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"
import '../../css/blog.less';
class Blog extends Component{

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


export default Blog;