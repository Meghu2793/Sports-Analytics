import React from 'react';
import { Radar } from 'react-chartjs-2';
import '../../styles/styles.css';
import '../API/radarData.js';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';


let radar = require('../API/radarData').authors;
let FG2_PCT = [];
let FG3_PCT = [];
let label_name = [];
let values =[];

for (let i = 0; i < radar.length; i++) {
  values = Object.values(radar[i]);
  FG2_PCT.push(values[0].FG2_PCT);
  FG3_PCT.push(values[0].FG3_PCT);
  label_name.push(values[0].PLAYER_NAME_LAST_FIRST);

}


let data = {
  labels: label_name,
  datasets: [
    {
      label: 'FG2_PCT',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,0.4)',
      pointBackgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,0.4)',
      pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
      pointHoverBorderColor: 'rgba(75,192,192,0.4)',
      data:FG2_PCT

    },

    {
      label: 'FG3_PCT',
      backgroundColor: '#686868',
      borderColor: '#686868',
      pointBackgroundColor: '#686868',
      pointBorderColor: '#686868',
      pointHoverBackgroundColor: '#686868',
      pointHoverBorderColor: '#686868',
      data:FG3_PCT
    }
  ]
};




export default React.createClass({
  displayName: "RadarExample",

  
  _onSelect: function (event) {
    console.log({data});
    for (let i = 0; i < radar.length; i++) {
      values = Object.values(radar[i]);
      if(values[0].PLAYER_NAME_LAST_FIRST == event.value){
       // FG2_PCT = values[0].FG2_PCT;
        //FG3_PCT = values[0].FG3_PCT;
          data.datasets[0].data = values[0].FG2_PCT,
          data.datasets[1].data = values[0].FG3_PCT
      } 
    }
  },

  render() {
    return (
      <div>
        <h4>Analytics</h4>
        <Radar data={data} />
      </div>
    );
  }
});
