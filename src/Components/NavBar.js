import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo.svg';

import {ButtonContainer} from "./button"


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
             {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            
                 Creative Commons (Attribution 3.0 Unported);
                  https://www.iconfinder.com/Makoto_msk */}
                <Link to='/home'>
                <img src={Logo} alt="store" className="navbar-brand " />
                </Link>
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                      <Link to="/" className="nav-link">
                          product
                      </Link>
                  </li>
              </ul>
              
              
              <Link to='/cart' className="ml-auto">
                  <ButtonContainer>
                      <span className="mr-2">
                           <i className="fas fa-id-card "/>
                      </span>
                     contact
                  </ButtonContainer>
              </Link>
            </nav>
        )
         
    }
}
// const ButtonContainer = Styled.button `
// text-transform: capitallize;
// font-size: 1.4rem;
// background: transparent ;
// border :0.05rem solid var (--LightBlue);
// color:var(--lightBlue);
// border-radius:0.5rem;
// padding: 0.2rem 0.5rem;
// cursor:pointer;
// margin:0.2rem 0.5rem 0.2rem 0;
// transition:all 0.5s ease-in-out.
// &:hover{
//     background: var (--lightBlue);
//     color:var(--mainBlue);
// }
// &focus{
//     outline : none;
// }


// `;
