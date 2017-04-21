import React,{Component} from "react";
import CellView from "../components/CellView";
import NProgress from 'nprogress';
import { connect } from 'react-redux';
// let array=[
//     {
//         title: '使用 npm 和 bower 发布插件',
//         created_at: '2016-08-10T08:54:33Z',
//         hash: "sds34"
//     }]
class View extends Component{

    constructor(props){
        super(props);
         if(!this.props.items){
        const { dispatch } = this.props;
        dispatch(getItems());
      }
    }

    componentDidMount(){
        NProgress.done();
    }
    render(){

        return (
            <div className="Cellist">
                <CellView items={this.props.items} />
            </div>
        )
    }

}
//map
function mapStateToProps(state) {
  const { 
    items
  } = state || {
    items: []
  };

  return {
    items
  }
}

export default connect(mapStateToProps)(View);