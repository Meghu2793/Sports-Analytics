import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Carousel,
  PanelHeading
} from "react-bootstrap";
import { Link, IndexLink } from "react-router";
import image1 from "../../images/Banner_lights.png";
import image2 from "../../images/nba-basketball.jpg";
import image3 from "../../images/football.jpg";
import "./Fantasy.css";
import json from "./sample";

var divStyle = {
  border: "1px solid #eee",
  padding: "15px"
};
var style1 = {
  // color: "#f8f8f8"
};
var style2 = {
  float: "right"
};
var style5 = {
    float: "right"
};
var style4 = {
  marginTop: "20",
  height: "400",
  overflow: "scroll",
  borderStyle: "solid",
  borderWidth: "5px",
  marginRight: "10px"
};
var divBorderLeft = {
  border: "1px solid #eee",
  background: "whitesmoke"
  // borderRightWidth: "30px solid #eee"
};
var style6 = {
marginBottom: "15px"
};
class FantasyProLytics extends React.Component {
  constructor() {
    super();
    this.state = {
      twits: [],
      scoreboard1: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/twitter_tweets")
      .then(results => results.json())
      .then(data => {
        // console.log(data);
        this.setState({ twits: data });
      });
    this.setState({ scoreboard1: json });
  }

  renderTwitter() {
    return this.state.twits.map(tweet => {
      return (
        <div>
          <span>
            <b>{tweet.name} </b> <span style={style1}>{tweet.userid}</span>
          </span>
          <span style={style2}>{tweet.created_at}</span>
          <p>{tweet.text} </p>
          <hr />
          {/* <p>{tweet.desc}</p> */}
        </div>
      );
    });
  }

  scoreboardUpdate() {
    return this.state.scoreboard1.scoreboard.gameScore.map(score => {
      return (
        <div>
          <p>
            <span>
              <b>{score.game.awayTeam.City}</b> 
            </span> <span style={style5}> {score.game.time} </span>
            <span>
              <b>{score.game.awayTeam.Name}</b>
            </span>
          </p>
          <p>VS</p>
          <p>
            <span>
              <b>{score.game.homeTeam.City}</b>
            </span>{" "}
            <span>
              <b>{score.game.homeTeam.Name}</b>
            </span>
          </p>
          <hr />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="AlignClass">
        {/* <span>
                <div className="align">
                <input className="burger-check" id="burger-check" type="checkbox"></input>
                    <label htmlFor="burger-check" className="burger"></label>
                    <nav id="navigation1" className="navigation">
                        <ul>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </nav>
                    </div>
                    </span>
                    <span>
                        {/* This is a banner section */}
        {/* <div className="col-md-12" style={divStyle}>
                    <img className = "imageBanner" src={image1}/>
                </div>
                </span> */}
        <div className="row">
          {/* <div className="col-md-2">
                <input className="burger-check" id="burger-check" type="checkbox"></input>
                    <label htmlFor="burger-check" className="burger"></label>
                    <nav id="navigation1" className="navigation">
                        <ul>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </nav> */}
          {/* </div> */}
          {/* <img className = "imageBanner" src={image1}></img> */}
          <div className="col-md-12">
            <Carousel>
              <Carousel.Item>
                <img width={1260} height={500} alt="900x500" src={image1} />
                <Carousel.Caption>
                  <h3>Sports Arena!!</h3>
                  <p>
                    
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={1260} height={500} alt="900x500" src={image2} />
                <Carousel.Caption>
                  <h3>Basketball NBA</h3>
                  <p>
                    
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={1260} height={500} alt="900x500" src={image3} />
                <Carousel.Caption>
                  <h3>Football NFL</h3>
                  <p>
                    
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* this is twitter section */}
        <div className="col-md-12" style={divStyle}>
          <div className="col-md-12" style={divBorderLeft}>
            <div className="container">
              <div className="row col-md-6" style={style4}>
              <h4 style={style6}><b>Twitter Live Feed</b></h4>
              <hr/>
                {this.renderTwitter()}
              </div>
              <div className="row col-md-6" style={style4}>
              <h4 style={style6}><b>Today's game</b></h4>
              <hr/>
                {this.scoreboardUpdate()}
              </div>
            </div>
          </div>

          {/* <div className="col-md-3" style={divBorderLeft}>
                        <p>Breaking News</p>
                    </div> */}

          {/* <div className="col-md-3" style={divBorderLeft}>
            <p>Todays Games</p>
          </div> */}

          {/* <div className="col-md-3" style={divBorderLeft}>
                        <p>DFS Player Leaderboards</p>
                    </div> */}
        </div>
        {/* <div className="col-md-12" style={divStyle}>
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
                </div> */}
      </div>
    );
  }
}

class FantasyPage extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar style={{margin: "20px"}}>
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
            </Navbar> */}
        {/* <div>
                 <h1>Fantasy</h1>
                 <p>This is a Fantasy Page.</p>
             </div> */}
        <FantasyProLytics />
        <div style={{ height: 10 }} >
            <section id="lab_social_icon_footer">
                <div className="container">
                    <div className="text-center center-block">
                        <a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                        <a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                        <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                        <a href="mailto:#"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                        <a href="#top">
                        <div style={{ float: "right", fontSize:"36px"}}>
                            <i className="fa fa-angle-double-up"></i>
                        </div>
                     </a>
                        {/* <p>© 2018 ProLytics</p> */}
                        
                    </div>
                </div>
            </section>
        </div>

      </div>
    );
  }
}

export default FantasyPage;
