import React from "react";
import Doughnut from "./doughnut";
import DynamicDoughnutExample from "./dynamic-doughnut";
import PieExample from "./pie";
import LineExample from "./line";
import BarExample from "./bar";
import HorizontalBarExample from "./horizontalBar";
import RadarExample from "./radar";
import PolarExample from "./polar";
import BubbleExample from "./bubble";
import ScatterExample from "./scatter";
import MixedDataExample from "./mix";
import LegendOptionsExample from "./legend-options";
import LegendHandlersExample from "./legend-handlers";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

var style10 = {
  padding : "10px"
};
var style11 = {
  overflow : "scroll",
  height: "550px"
};
var style12 = {
width : "500px",
marginTop : "25px"
};
var style14 = {
  marginTop: "30px"
}

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: {}
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/NBA/get_player_shot_tracking_overall")
      .then(results => results.json())
      .then(data => {
        this.setState({ pictures: data });
      });
  }

  renderPicture() {
    return this.state.pictures.map(pic => {
      const val = Object.values(pic);
      return val.map(obj => {
        return (
          <tr>
            <td style={style10}>{obj.PLAYER_NAME_LAST_FIRST}</td>
            <td style={style10}>{obj.FG2_PCT}</td>
            <td style={style10}>{obj.FG3_PCT}</td>
          </tr>
        );
      });
    });
  }

  render() {
    return (
      <div className="animated zoomInDown">
      <div class = "col-md-12 row"> 
        <div className="col-md-6" style={style14}>
        <RadarExample />
        </div>
        {/* <div className="col-md-4" /> */}
        <div className="col-md-6" style= {style11}>
          <table className="table-striped table-bordered table-hover" style={style12} >
            <thead>
              <tr>
                <th style={style10}>Player Name &nbsp; </th>
                <th style={style10}>FG2_PCT &nbsp; </th>
                <th style={style10}>FG3_PCT &nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pictures.length > 0 && this.renderPicture()}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }
}

// //COde to fetch the data from API using Axious.js / fetch call
// componentDidMount(){
//     fetch('http://localhost:3000/pythonRes')
//     .then(results => results.json()
//     ).then(data =>  {
// 		var res = data;
// 		res.map(pic => {
// 			const values_ = Object.values(pic)
// 			values_.map(obj =>{
// 			console.log(obj);
// 		})
// 	})
// 		this.setState({pictures: data});
// 		// console.log("state", this.state.pictures);
// 	});
// }

// renderPicture () {
// 	console.log("Inside Render Picture", Object.keys(this.state.pictures));
// 	this.state.pictures.map((pic) => {
// 		const val = Object.values(pic);
// 		val.map(obj =>{
// 			console.log(obj);
// 			fgValues.push(obj);
// 		})
// 		// console.log("Values",Object.values(pic))
// 	});
// }

//Bootstrap Table

{
  /* <div>
				<BootstrapTable data={this.props.fgValues}>
					<TableHeaderColumn isKey dataField='id'>
						Name
					</TableHeaderColumn>
					<TableHeaderColumn dataField='name'>
						FG2_PC3
					</TableHeaderColumn>
					<TableHeaderColumn dataField='value'>
						FG2_PC2
					</TableHeaderColumn>
				</BootstrapTable>
	  </div> */
}
