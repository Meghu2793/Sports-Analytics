import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {Link} from 'react-router';

class CoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 5;
    }

    handleChange(event){
        this.setState({
            [event.target.id] : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }
    // RouteToSignupPage(event){
    //     <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
    // }
    render(){
        return(
            <div>
                <h1>Login Here!</h1>
                <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            bsStyle="primary"
            // disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <Link to="about"><p style = {{float: "right", cursor:"pointer"}}>Don't have account, New User ? 
          </p></Link>
        </form>
      </div>
                
            </div>
        );
    }
    
}
export default CoursePage;
