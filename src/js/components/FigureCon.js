/**
 * params： props={
 *          url :string , // project's home
 *          ImgUrl: string, // img url
 *          title :string , //project title
 *          githubURL, //  open sourse url
 *          tags: string [ //label
 *              tag,...
 *          ],
 *          createAt :string // create projec date
 *      }
 * 
 */
import React, {Component} from "react";

class TagAdvancd extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <span className="tag">
                <a>{this.props.tag}</a>
            </span>
        )
    }
}

export default class FigureCon extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="project_inner">
                <div className="img flex"  >
                    <img className="project_img" src={this.props.ImgUrl}/>
                </div>
                <a href={this.props.url}>
                    <h3 className="project_title">{this.props.title}</h3>
                </a>
                <div className="project_tag">
                    {
                        this.props.tags.map((item,index)=>
                            <TagAdvancd tag={item} key={index} />
                        )
                    }
                </div>
                <div className="project_footer clearfix">
                    <a href={this.props.githubURL}>源代码</a>
                    <span>{this.props.createAt}</span>
                </div>
            </div>
        )
    }
}