import React ,{Component} from "react";
import marked from 'marked';
import "../../css/marked.less";

export default class Marked extends Component{

    constructor(props){
        super(props);
        this.state={
            mark:""
        }
    }
    updateMarkdown(event){
        this.setState({mark:event.target.value});
        console.log(this.state.mark);
    }
    render(){

        return(
            <div className="markedCon">
                <textarea className="editor" rows="6" cols="60" onChange={this.updateMarkdown.bind(this)}>
                </textarea>
              <div className="preview article-content" dangerouslySetInnerHTML={{__html: marked(this.state.mark)}}></div>
            </div>
        )
    }

}