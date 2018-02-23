import React from 'react';
import {Radar} from 'react-chartjs-2';
import '../../styles/styles.css';

const data = {
  labels: ['NBA', 'MLB', 'NFL', 'NHL', 'PGA'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#488A99',
      borderColor: '#488A99',
      pointBackgroundColor: '#488A99',
      pointBorderColor: '#488A99',
      pointHoverBackgroundColor: '#488A99',
      pointHoverBorderColor: '#488A99',
      data: [310, 420, 530, 640, 756]
    },
    {
      label: 'My Second dataset',
      backgroundColor: '#1F3F49',
      borderColor: '#1F3F49',
      pointBackgroundColor: '#1F3F49',
      pointBorderColor: '#1F3F49',
      pointHoverBackgroundColor: '#1F3F49',
      pointHoverBorderColor: '#1F3F49',
      data: [560, 670, 780, 819, 996]
    },
    {
      label: 'My Third dataset',
      backgroundColor: '#73909A',
      borderColor: '#73909A',
      pointBackgroundColor: '#73909A',
      pointBorderColor: '#73909A',
      pointHoverBackgroundColor: '#73909A',
      pointHoverBorderColor: '#73909A',
      data: [128, 1148, 40, 119, 196]
    }
  ]
};

export default React.createClass({
  displayName: "RadarExample",

  render() {
    return (
      <div>
        <h4>Radar Example</h4>
        <Radar data={data} />
      </div>
    );
  }
});
