import React from 'react';
import Doughnut from './doughnut';
import DynamicDoughnutExample from './dynamic-doughnut';
import PieExample from './pie';
import LineExample from './line';
import BarExample from './bar';
import HorizontalBarExample from './horizontalBar';
import RadarExample from './radar';
import PolarExample from './polar';
import BubbleExample from './bubble';
import ScatterExample from './scatter';
import MixedDataExample from './mix';
import LegendOptionsExample from './legend-options';
import LegendHandlersExample from './legend-handlers';

export default class App extends React.Component {

	//COde to fetch the data from API using Axious.js / fetch call
	// componentDidMount(){
    //     fetch('http://localhost:4545/pythonRes')
    //     .then(results => {
    //         return results.json();
    //     }).then(data =>  {
    //         let pictures = data
    //             <div>
    //                 <p> {data}</p>
    //             </div>
    //     //     let data_one = data.results.map((pic) => {
    //     //         return(
    //     //             <div key={pic.results}>
    //     //                 <p>{pic}</p>
    //     //             </div>
    //     //         )
    //     //     }
    //     // )
    // });
    // }


	render() {
		return (
			<div>
				<div className="col-sm-6">
				< RadarExample />
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
				
			</div>
		);
	}
}