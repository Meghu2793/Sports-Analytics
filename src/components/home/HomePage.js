import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import { Link, IndexLink } from "react-router";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
// import pic from '../../../src/images/Home (1).jpg';
import '../../styles/styles.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "100%"
};
const insideStyles = {
  background: "grey",
  padding: 10,
  position: "absolute",
  font: 400,
  width: "15%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://designmodo.com/wp-content/uploads/2013/08/MIO-Global.jpg";
const image2 =
  "https://designmodo.com/wp-content/uploads/2013/08/MIO-Global.jpg";
const image3 = "https://i.ytimg.com/vi/fvEBY1Zf70Y/maxresdefault.jpg";

//
const App = () => (
    <div style={styles} id="top" className="animated rotateInUpRight">
        <Parallax bgImage={image1}
            strength={300}>
            <div style={{ height: 700 }}><a href="#prolytics">
                <div style={insideStyles} >
                    <span style={{ color: 'white' }}  className="animated flip">About Us</span>
                </div></a>
            </div>
        </Parallax>
        <Parallax>
            <div id="prolytics" >
                <h3 style={{ textalign: 'center', textShadow:"2px 2px" }}>ProLytics</h3><br></br>
                <div style={{ color: "#777", backgroundcolor: 'white', textalign: 'center' }}>

                    <p>For coaches, this analytics suite will allow them to analyze the team’s performance, a single player’s performance, their opponent’s tendencies and other strategic insights. For scouts, this analytics suite will provide in-depth look into prospective players and extract insights using predictive analytics. For team managers and executives, this analytics suite will empower them to make more informed analytical decisions in the draft, during free agency and in the trade market. For the avid sports fantasy player, using the latest machine learning and AI technologies, players can gain an informative edge using this sports analytics suite.</p>
                </div>
            </div>
        </Parallax>
        <Parallax>
            <div style={{ position: 'relative' }}>
                <div style={{ color: '#777', backgroundcolor: 'red', textalign: 'center', padding: '50' }}>
                    <p>ProLytics is a multiple sports analytics suite used to perform advanced statistical
    analysis on professional and collegiate teams and athletes using machine learning and AI technologies.
</p>
                </div>
            </div>

        </Parallax>

        <Parallax bgImage={image1}
            strength={-100} style={{ height: 350 }}>

        </Parallax>
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
                        <p>© 2018 ProLytics</p>
                        
                    </div>
                </div>
            </section>
        </div>
    </div>
  
);

export default App;
