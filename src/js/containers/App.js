import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { CONFIG } from "../constants/Config";
// import { connect } from 'react-redux';

class root extends React.Component{

    constructor(props){
        super(props);
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

export default root;