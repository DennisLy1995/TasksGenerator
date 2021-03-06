import React, { Component } from "react";
import './informationCard.css';
import todos from "./todos.json";

var informationCardId = '';

class InformationCard extends React.Component {
  render() {
    informationCardId = 'informationCard' + this.props.numberID
    return (
      <div  id={'informationCard'+this.props.numberID} className="card border-secondary mb-3 informationCard" style={{minWidth: '15rem',maxWidth:'20rem', width:'15%', margin: '1%' , display: 'inline-block'}}>

        <div className="card-header"  style={{textAlign:'center'}}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">{this.props.title}</label>
          </div>
        </div>

        <div className="card-body"  style={{textAlign:'center', height:'20rem', maxHeight:'15rem', overflow: 'scroll'}}>
          <div className="form-group">
            <label htmlFor="description">{this.props.description}</label>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority: {this.props.priority}</label>
          </div>
        </div>
        
        <div className="card-footer"  style={{textAlign:'center'}}>
          <button type="button" className="btn btn-danger" onClick={deleteCard(informationCardId)}>Delete task</button>
        </div>

      </div>

    );
  }
}

export default InformationCard;



function deleteCard(informationCard){
  //document.getElementById('tasksContainer').removeChild('informationCard')
}