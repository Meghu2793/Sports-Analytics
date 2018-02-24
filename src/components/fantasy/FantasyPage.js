import React from "react";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link, IndexLink} from 'react-router';

var divStyle = {
    height: "200px"
  };

class FantasyProLytics extends React.Component{
    render(){
        return(
            <div>
                <div className="col-md-12" style={divStyle}>
                    <p>This is Banner Section </p>
                </div>
                <div className="col-md-12" style={divStyle}>
                    <div className="col-md-3">
                        <p>Twitter Live Feed</p>
                    </div>
                    <div className="col-md-3">
                        <p>Breaking News</p>
                    </div>
                    <div className="col-md-3">
                        <p>Todays Games</p>
                    </div>
                    <div className="col-md-3">
                        <p>DFS Player Leaderboards</p>
                    </div>
                </div>
                <div className="col-md-12" style={divStyle}>
                    <div className="col-md-2">
                        <p>ProLytics Demo: How to</p>
                    </div>
                    <div className="col-md-2">
                        <p>NBA</p>
                    </div>
                    <div className="col-md-2">
                        <p>MLB</p>
                    </div>
                    <div className="col-md-2">
                        <p>NFL : Coming Soon</p>
                    </div>
                    <div className="col-md-2">
                        <p>etc</p>
                    </div>
                </div>

            </div>
        );
    }
}

class FantasyPage extends React.Component{
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
             {/* <div>
                 <h1>Fantasy</h1>
                 <p>This is a Fantasy Page.</p>
             </div> */}
             <FantasyProLytics />
             </div>
        );
    }
}

export default FantasyPage;