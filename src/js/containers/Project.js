import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"
import FigureCon from "../components/FigureCon";
import NProgress from 'nprogress';
const items=[
    {   url: "https://github.com/zhongsink",
        ImgUrl: "http://localhost:3000/images/project.png",
        title: "个人主页",
        githubURL:"https://github.com/zhongsink",
        tags:["blog","rem"],
        createAt:"2017-4-15"
    },
]

class Project extends Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        NProgress.done();
    }
    render(){

        return (
            <div className="flex row-flex">
                <FixSlide />
                <div className="contence" >
                    <header>
                        <h1 className="category">作品</h1>    
                        <p>本人大学计算机专业，自主学习前端技术，集中在React/vue和nodejs</p>
                    </header>
                    <div className="flex row-flex">
                    {
                        items.map((item,index)=>
                            <FigureCon {...item} key={index} />
                        )
                    }    
                    </div>           
                </div>
            </div>
        )

    }

}
export default Project;