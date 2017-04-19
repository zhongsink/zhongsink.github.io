import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"
import NProgress from 'nprogress';

import "../../css/about.less";
class AboutMe extends Component{

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
                        <h1 className="category">关于</h1>    
                        <p>本人大学计算机专业，自主学习前端技术，集中在React/vue和nodejs</p>
                    </header>
                    <div className="AboutMain">
                        <h2>自我评价</h2>
                        <ul>
                            <li>自信、严谨、友好、乐于沟通；</li>
                            <li>喜欢互联网，对互联网及移动互联网行业充满热情，有不断提升自己的学习意识，希望能深入学习和发展； </li>
                            <li>具备创新精神及团队合作精神，吃苦耐劳，能与团队一起努力，艰苦奋斗；</li>
                            <li>本人正在寻找前端实习岗位 <a href="mailto:zhongink@gmail.com">email：zhongink@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }

}


export default AboutMe;