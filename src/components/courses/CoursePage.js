import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router";
import facebook_image from "../../images/facebook.png";
import twitter_image from "../../images/Twitter.png";

class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 5;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  twitterLogin(event){
    console.log("hello")
    fetch("http://localhost:8080/twitter/login", {mode: 'no-cors'});
  }
  // RouteToSignupPage(event){
  //     <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
  // }
  render() {
    return (
        <div className="Login">
          <h3 className="container fluid" style={{"marginBottom":"30px"}}>Login Here!</h3>
          <div className="row col-md-12">
         <div className="col-md-6">
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
                type="submit">
                Login
              </Button>
              <Link to="about">
                <p style={{ float: "right", cursor: "pointer" }}>
                  Don't have account, New User ?
                </p>
              </Link>
            </form>
          {/* </div> */}
        </div>
        <div className="col-md-2">
        <p>OR</p>
        </div>
        <div className="col-md-4">
            <p>Login with Facebook</p>
            <a href="/auth/facebook">
            <img style={{"cursor":"pointer"}} width={40} height={40} src={facebook_image} /></a>
            <p>Login with Twitter</p>
            <img style={{"cursor":"pointer"}} width={40} height={40} src={twitter_image} onClick={this.twitterLogin} />
        </div>
      </div>
      </div>
    );
  }
}
export default CoursePage;
