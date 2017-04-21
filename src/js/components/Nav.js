import React,{Component} from "react";
import { Link } from "react-router"; 

class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let item=this.props.item;
        return (
            <li className="item">
                <Link to={item.pathname!=="/" ?"/"+item.pathname:item.pathname }>{item.title}</Link>
            </li>
        )
    }

}

class Nav extends Component{

    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <nav className="nav animated">
                <div ref="command" className="commond"></div>
                <ul ref="list" className="list">
                    {
                        this.props.items.map((value, index) => 
                            <Item  item={value} key={index}/>
                        )
                       
                    }
                    {/*<li className="item">
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
                    </li>*/}
                </ul>
            </nav>
        )
    }
}


export default Nav;