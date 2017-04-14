import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import { connect } from 'react-redux';


class root extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="page">
                <Header />
                <Nav />
                <Footer />
            </div>
        )
    }
}

export default root;