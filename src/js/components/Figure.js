/**
 * params： props={
 *          url :string , // project's home
 *          UrlImg: string, // img url
 *          title :string , //project title
 *          githubURL, //  open sourse url
 *          tags: string [ //label
 *              tag,...
 *          ],
 *          createAt :string // create projec date
 *      }
 * 
 */


import React, {Component} from "React";

class Tag extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <span class="tag">
                <a href={"#"+this.props.tag}>{this.props.tag}</a>
            </span>
        )
    }
}

export default class Figure extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="project_inner">
                <a href={this.props.url}>
                    <img className="project_img" src={require(this.props.ImgUrl)}/>
                </a>
                <a href={this.props.url}>
                    <h3 className="project_title">{this.props.title}</h3>
                </a>
                <div className="project_tag">
                    {
                        this.props.tags.map((item,index)=>
                            <Tag tag={item} key={index} />
                        )
                    }
                </div>
                <div className="project_footer">
                    <a href={this.props.githubURL}>源代码</a>
                    <span>{this.props.createAt}</span>
                </div>
            </div>
        )
    }


}