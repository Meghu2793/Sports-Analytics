import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import { Link, IndexLink } from 'react-router';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import pic from '../../../src/images/Home (1).jpg';


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    height: '100%'

};
const insideStyles = { background: 'grey', padding: 10, position: 'absolute', font: 400, width: '15%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };
const image1 = "https://designmodo.com/wp-content/uploads/2013/08/MIO-Global.jpg";
const image2 = "https://designmodo.com/wp-content/uploads/2013/08/MIO-Global.jpg";
const image3 = "https://i.ytimg.com/vi/fvEBY1Zf70Y/maxresdefault.jpg";

//
const App = () => (
    <div style={styles} id="top">
        <Parallax bgImage={image1}
            strength={300}>
            <div style={{ height: 700 }}><a href="#prolytics">
                <div style={insideStyles} >
                    <span style={{ color: 'white' }}>SROLL DOWN</span>
                </div></a>
            </div>
        </Parallax>
        <Parallax>
            <div id="prolytics" >
                <h3 style={{ textalign: 'center' }}>ProLytics</h3><br></br>
                <div style={{ color: "#777", backgroundcolor: 'white', textalign: 'center' }}>
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                </div>
            </div>
        </Parallax>
        <Parallax>
            <div style={{ position: 'relative' }}>
                <div style={{ color: '#777', backgroundcolor: 'red', textalign: 'center', padding: '50' }}>
                    <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
            </div>

        </Parallax>
      
        <Parallax bgImage={image1}
            strength={-100} style={{ height: 350 }}>
           
        </Parallax>
        <div style={{ height: 200 }}>
        </div>
        <h2>{'\u2728'}</h2>
    </div>

);

export default App;