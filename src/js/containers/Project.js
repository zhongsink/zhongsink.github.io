import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"
import FigureCon from "../components/FigureCon";

const items=[
    {   url: "https:\\github.com",
        ImgUrl: "https://agusmakmun.github.io/static/projects/placeholder.jpg",
        title: "个人主页",
        githubURL:"https:\\github.com",
        tags:["blog","rem"],
        createAt:"4 2016"
    },
    {   url: "https:\\github.com",
        ImgUrl: "https://agusmakmun.github.io/static/projects/placeholder.jpg",
        title: "个人主页",
        githubURL:"https:\\github.com",
        tags:["blog","rem"],
        createAt:"4 2016"
    },
    {   url: "https:\\github.com",
        ImgUrl: "https://agusmakmun.github.io/static/projects/placeholder.jpg",
        title: "个人主页",
        githubURL:"https:\\github.com",
        tags:["blog","rem"],
        createAt:"4 2016"
    }
]

class Project extends Component{

    constructor(props){
        super(props);
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