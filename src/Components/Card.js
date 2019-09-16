import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './card.css';


import ModalExample from './Modal'
import React from 'react';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


class CardExample extends React.Component {     
  
  render(){
    console.log(this.props.item);
  return (
      
    <MDBCol>
        <div className="row m-auto">
        <div className="col-lg-4 col-md-4">
      <MDBCard style={{ width: "22rem" , margin : "6%" , boxShadow: " 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}}>
        <MDBCardImage className="img-fluid" src={this.props.item.img} waves />
        <MDBCardBody>
          <MDBCardTitle>{this.props.item.title}</MDBCardTitle>
          <MDBCardText>
            {this.props.item.info}
          </MDBCardText>
          <ModalExample buttonLabel="show detail" onClick={this.props.onClick} title={this.props.item.title} desc={this.props.item.info}/> 
        </MDBCardBody>
      </MDBCard>
      </div>
      </div>
     </MDBCol>
    
    
    
   

    
    
  )
}
}

export default CardExample;
