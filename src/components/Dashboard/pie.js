import React from 'react';
import {Pie} from 'react-chartjs-2';
import '../../styles/styles.css';

const data = {
	labels: [
		'NBA',
		'MLB',
		'NFL'
	],
	datasets: [{
		data: [300, 50, 100,150,25],
		backgroundColor: [
			'#488A99', '#1F3F49', '#73909A'
		],
		hoverBackgroundColor: [
			'#488A99', '#1F3F49', '#73909A'
		]
	}]
};

export default React.createClass({
  displayName: 'PieExample',

  render() {
    return (
      <div>
        <h4>Pie Example</h4>
        <Pie data={data} />
      </div>
    );
  }
});
