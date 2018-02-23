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
import react_bootstrap from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import '../css/Table.css';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

export default class App extends React.Component {
  // var products = [{
  // 	id: 1,
  // 	name: "Item name 1",
  // 	price: 100
  //   },{
  // 	id: 2,
  // 	name: "Item name 2",
  // 	price: 100
  //   },........];

  constructor() {
    super();
    this.state = {
      pictures: {}
    };
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

  componentDidMount() {
    fetch("http://localhost:3000/pythonRes")
      .then(results => results.json())
      .then(data => {
        this.setState({ pictures: data });
        // console.log("state", this.state.pictures);
      });
  }

  renderPicture() {
    console.log("Inside Render Picture", Object.keys(this.state.pictures));
    return this.state.pictures.map(pic => {
      const val = Object.values(pic);
      return val.map(obj => {
        return (
          <tr>
            <td>{obj.PLAYER_NAME_LAST_FIRST}</td>
            <td>{obj.FG2_PCT}</td>
            <td>{obj.FG3_PCT}</td>
          </tr>
        );
        // console.log(obj.PLAYER_NAME_LAST_FIRST);
      });
      // console.log("Values",Object.values(pic))
    });
  }

  render() {
    return (
      <div className="animated zoomInDown">
        <div className="col-sm-6">
          <RadarExample />
        </div>
        <div className="col-sm-6">
          <Doughnut />
        </div>
        <div className="col-sm-6">
          <DynamicDoughnutExample />
        </div>
        <div className="col-sm-6">
          <PieExample />
        </div>
        {/* <div>
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
	  </div> */}
        <div className="col-md-4" />
        <div className="col-md-6">
          <table className="table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Name </th>
                <th>Address </th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pictures.length > 0 && this.renderPicture()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
