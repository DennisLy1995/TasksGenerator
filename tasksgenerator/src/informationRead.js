import React, { Component } from "react";

class informationBlock extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (

            <div style={{width: '67%', display: 'inline-block', padding: '2%', color:'white', textAlign:'center', marginTop:'5%', position:'absolute'}}>
                <h2>{this.props.title}</h2>
                <p></p>
                <p>{this.props.information}</p>
            </div>
        );
    }

}

export default informationBlock;