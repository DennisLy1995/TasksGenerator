import React, { Component } from "react";
import { listenerCount } from "events";
import logo from './list.svg';

class informationBlock extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (

            <div style={{width: '67%', display: 'inline-block', padding: '2%', color:'white', textAlign:'center', marginTop:'5%', position:'absolute'}}>
                <h2>{this.props.title}<img src={logo} className="App-logo-task" alt="logo" style={{marginLeft:'2%'}}/></h2>
                <p></p>
                <p>{this.props.information}</p>
            </div>
        );
    }

}

export default informationBlock;