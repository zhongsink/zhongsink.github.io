import React, { Component } from "react";
import CellView from "../components/CellView";
import NProgress from 'nprogress';
import { connect } from 'react-redux';

const localItem=JSON.parse(localStorage.getItem("Items")).reverse();
let array = [
    {
        hash: "sds34",
        title: '函数防抖与函数节流',
        created_at: '2016-08-19T08:54:33Z'
    }]
class View extends Component {

    constructor(props) {
        super(props);
        if (this.props.items===[]) {
            const { dispatch } = this.props;
            dispatch(getItems());
        }
    }

    componentDidMount() {
        NProgress.done();
    }
    render() {
        return (
            <div className="Cellist">
                <CellView items={ this.props.items && this.props.items.length > 0 ? this.props.items : localItem || array} />
            </div>
        )
    }

}
//map
function mapStateToProps(state) {
    const {
    items
  } = state ||  {
            items: []
        };

    return {
        items
    }
}

export default connect(mapStateToProps)(View);