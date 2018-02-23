import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'NBA',
		'MLB',
		'NFL'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
      '#488A99', '#1F3F49', '#73909A'
    ],
    hoverBackgroundColor: [
      '#488A99', '#1F3F49', '#73909A'
    ]
  }]
});

export default React.createClass({
  displayName: 'DynamicDoughnutExample',

	getInitialState() {
		return getState();
	},

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 5000);
	},

  render() {
    return (
      <div>
        <h4>Dynamicly refreshed Doughnut Example</h4>
        <Doughnut data={this.state} />
      </div>
    );
  }
});
