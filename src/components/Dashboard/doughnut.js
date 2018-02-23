import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'NBA',
		'MLB',
		'NFL'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#488A99', '#1F3F49', '#73909A'
		],
		hoverBackgroundColor: [
			'#488A99', '#1F3F49', '#73909A'
		]
	}]
};

export default React.createClass({
  displayName: 'DoughnutExample',

  render() {
    return (
      <div >
        <h4>Doughnut Example</h4>
        <Doughnut data={data} />
      </div>
    );
  }
});
