import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import {ButtonContainer} from '../Components/button'
import Card from './Card';
// import Product from '../Components/product';
import storeProducts from './ProductList';
 
  

export default class Details extends Component {
  render() {
    
    return (
        <BrowserRouter>
        
         <div>
        <div className="row">
            <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
              <h1>
                {this.props.item.title}
              </h1>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={this.props.item.img} className="img-fluid" alt="product"/>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model: {this.props.item.title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{this.props.item.company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span> {this.props.item.price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                </p>
                <p className="text-muted lead">
                  {this.props.item .info}
                </p>
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      back to products
                    </ButtonContainer>
                  </Link>
                   
                </div>
              </div>
            </div>
          </div>

            )
            )   
      

          
        
      </div>
        </BrowserRouter>
     
    )
  }
}
