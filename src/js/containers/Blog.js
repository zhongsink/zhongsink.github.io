import React ,{Component} from "react";
import FixSlide from "../components/FixSlide"
import { connect } from 'react-redux';
class Blog extends Component{

    constructor(props){
        super(props);
         if(!this.props.items){
            const { dispatch } = this.props;
            dispatch(getItems());
        }
    }

    render(){
        console.log(this.props.items)
        return (
            <div className="flex row-flex">
                <FixSlide />
                <div className="contence" >
                    {this.props.children}
                </div>
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

export default connect(mapStateToProps)(Blog);
