import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px",
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink to="/login" className="NavLink" style={{color:'white', marginLeft:'10px'}}> Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/" className="NavLink" style={{color:'white', marginLeft:'10px'}}>Home </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/orders" className="NavLink" style={{color:'white', marginLeft:'10px'}}> Order</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Header;