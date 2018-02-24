import React from "react";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link, IndexLink} from 'react-router';

class ProfessionalPage extends React.Component{
    render() {
        return(
            <div>
            <Navbar style={{margin: "20px"}}>
            <Nav className="container-fluid" pullRight>
                <IndexLink to="/nba" activeClassName="active">NBA</IndexLink>
                {"  |  "}
                <Link to="/mlb" activeClassName="active">MLB</Link>
                {"  |  "}
                <IndexLink to="/nfl" activeClassName="active">NFL</IndexLink>
                {"  |  "}
                <Link to="/nhl" activeClassName="active">NHL</Link>
                {"  |  "}
                <Link to="/pga" activeClassName="active">PGA</Link>
            </Nav>
            </Navbar>
             <div className="container fluid">
                 <h3>Professional</h3>
                 <p>This is a Professional Page.</p>
             </div>
             </div>
        );
    }
}

export default ProfessionalPage;