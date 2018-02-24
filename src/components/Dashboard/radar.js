import React from 'react';
import {Radar} from 'react-chartjs-2';
import '../../styles/styles.css';

  export default class Radar_Show extends React.Component {

    constructor(){
      super();
      this.state = {
        pictures: { },
      radar_data : [
        {
          label: 'FG2_PCT',
          backgroundColor: '#488A99',
          borderColor: '#488A99',
          pointBackgroundColor: '#488A99',
          pointBorderColor: '#488A99',
          pointHoverBackgroundColor: '#488A99',
          pointHoverBorderColor: '#488A99',
          data: [ ]
        },
        {
          label: 'FG2_PCT',
          backgroundColor: '#488A99',
          borderColor: '#488A99',
          pointBackgroundColor: '#488A99',
          pointBorderColor: '#488A99',
          pointHoverBackgroundColor: '#488A99',
          pointHoverBorderColor: '#488A99',
          data: [ ]
        }
      ]
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080//NBA/get_player_shot_tracking_overall")
      .then(results => results.json())
      .then(data => {
        this.setState({ pictures: data });
        this.renderPicture();
      });
  }

  renderPicture() {
    console.log("Inside Render Picture", Object.keys(this.state.pictures));
    this.state.pictures.map(pic => {
      const val = Object.values(pic);
      val.map(obj => {
        this.state.radar_data[0].data.push(obj.FG2_PCT);
        this.state.radar_data[1].data.push(obj.FG3_PCT);
      });
      
    });
    console.log("I am here", this.state.radar_data);
  }

render() {
    return (
      <div>
        <h4>Radar Example</h4>
        <Radar data={this.radar_data} />
      </div>
    );
  }
}

//labels: ['NBA', 'MLB', 'NFL', 'NHL', 'PGA'],

  // renderPicture() {
  //   console.log("Inside Render Picture", Object.keys(this.state.pictures));
  //   return this.state.pictures.map(pic => {
  //     const val = Object.values(pic);
  //     return val.map(obj => {
  //         // <td>{obj.PLAYER_NAME_LAST_FIRST}</td>
  //          // dataset[0].data.append(obj.FG2_PCT);
  //         // dataset[1].data.append(obj.FG3_PCT);

  //          this.setState({dataset[0].data : obj.FG2_PCT});
  //         dataset[1].data = obj.FG3_PCT;
                  
  //     });
  //   });
  // },


//  const data = {
//   constructor() {
//     this.state = {
//       pictures: {}
//     };
//   },
//   //labels: ['NBA', 'MLB', 'NFL', 'NHL', 'PGA'],
//   dataset: [
//     {
//       label: 'FG2_PCT',
//       backgroundColor: '#488A99',
//       borderColor: '#488A99',
//       pointBackgroundColor: '#488A99',
//       pointBorderColor: '#488A99',
//       pointHoverBackgroundColor: '#488A99',
//       pointHoverBorderColor: '#488A99',
//       data: []
//     },
//     {
//       label: 'FG3_PCT',
//       backgroundColor: '#1F3F49',
//       borderColor: '#1F3F49',
//       pointBackgroundColor: '#1F3F49',
//       pointBorderColor: '#1F3F49',
//       pointHoverBackgroundColor: '#1F3F49',
//       pointHoverBorderColor: '#1F3F49',
//       data: []
//  }
// ]
// };
    // {
    //   label: 'My Third dataset',
    //   backgroundColor: '#73909A',
    //   borderColor: '#73909A',
    //   pointBackgroundColor: '#73909A',
    //   pointBorderColor: '#73909A',
    //   pointHoverBackgroundColor: '#73909A',
    //   pointHoverBorderColor: '#73909A',
    //   data: [128, 1148, 40, 119, 196]
    // }
  // ]
  