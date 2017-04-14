import React,{Component} from "react";
import { Link } from "react-router"; 

class Nav extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <nav className="nav animated">
                <ul className="list">
                    <li className="item">
                        <Link to="/">主页</Link>
                    </li>
                    <li className="item">
                        <Link to="blog">博客</Link>
                    </li>
                    <li className="item">
                        <Link to="project">案例</Link>
                    </li>
                    <li className="item">
                        <Link to="resume">简历</Link>
                    </li>
                    <li className="item">
                        <Link to="about">关于</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Nav;