import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../../styles/styles.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <Navbar style={{ margin: '1' }}>
        <div className = "row">
        <div className="col-md-4">
            <Navbar.Header className="LogoStyle">
                <Navbar.Brand>
                    {/* <div className="col-md-6">
                        <img style={{marginTop : "-32px",height:"65px"}} src={logo} />
                    </div>  */}
                    <div className="col-md-12" style={{margin : "0px",padding:"0px"}}>
                        <a href="#brand" style={{ fontSize: "30px", color: "#4d4d4d" }} className="animated  flip"> Sports Analytics</a>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </div>
            <div className="col-md-8">
            <Navbar.Collapse>
                <Nav pullRight className="animated flip" id="top">
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    {"  |  "}
                    <Link to="/dashboard" activeClassName="active">Dashboard</Link>
                    {"  |  "}
                    <Link to="/fantasy" activeClassName="active">Fantasy</Link>
                    {"  |  "}
                    <Link to="/courses" activeClassName="active">Login</Link>
                    {"  |  "}
                    <Link to="/about" activeClassName="active">SignUp</Link>
                </Nav>
            </Navbar.Collapse>
            </div>
            </div>
        </Navbar>
    );
};

export default Header;
