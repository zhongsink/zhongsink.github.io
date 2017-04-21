import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { CONFIG } from "../constants/Config";
import { connect } from 'react-redux';
//import action
import { getItems } from "../actions/index.js";

class root extends React.Component{

    constructor(props){
        super(props);
    }
    // request
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getItems());
  }
    render(){
        return (
            <div className="page">
                <Header />
                <Nav items={CONFIG.HOME}/>
                <Footer />
            </div>
        )
    }
}


export default connect()(root);