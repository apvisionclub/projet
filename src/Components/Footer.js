import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './card.css';

const FooterPage = () => {
  return (
    <div className="text1" >
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">about us</h5>
            <p>
            Twenty Seven is a website where we sell smartphones at cheap prices and also the delivery is fast and efficient. Our main goal is to deliver you a cheap and original product internationally.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/home">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/"> product</a>
              </li>
              <li className="list-unstyled">
                <a href="/cart">contact</a>
              </li>
            
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com">  Twenty-Seven.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;