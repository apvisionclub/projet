import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/NavBar";
import Default from "./Components/Default";
import Details from "./Components/Details";
import Productlist from "./Components/ProductList";
import Cart from "./Components/cart";
// import Product from "./Component/product";
import {Switch, Route} from 'react-router-dom';
import {ButtonContainer} from "./Components/button";
import Card from "./Components/Card"
import FooterPage from './Components/Footer';
import Home from './home'
import cemmenterPage from './cemmenterPage'
import FormsPage from './form';
import MailPage from './message'






class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        
        
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route  path="/home" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/form" component={FormsPage} />
          <Route path="/e-mail" component={MailPage} />
          <Route  Component={Default} />
        </Switch>
       
        <FooterPage/>
      </React.Fragment>
      
     );
  }
}
export default App;
