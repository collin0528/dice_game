import React, { Component } from 'react';

// class Music extends React.Component {
//     state = {
//       play: false
//     };
   
//    audio = new Audio(this.props.url)
  
//     componentDidMount() {
//       audio.addEventListener('ended', () => this.setState({ play: false }));
//     }
    
//     componentWillUnmount() {
//       audio.removeEventListener('ended', () => this.setState({ play: false }));  
//     }
  
//     togglePlay = () => {
//       this.setState({ play: !this.state.play }, () => {
//         this.state.play ? this.audio.play() : this.audio.pause();
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
//         </div>
//       );
//     }
//   }
  
//   export default Music;

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

      play: false,
      pause: true

    };

    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);

  }

  play(){
    this.setState({
      play: true,
      pause: false
    });
    console.log(this.audio);
    this.audio.play();
  }
  
  pause(){
  this.setState({ play: false, pause: true });
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div>
      <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
    </div>
    );
  }
}


export default Music


