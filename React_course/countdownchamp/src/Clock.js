import React, { Component } from 'react';
import './App.css';

// Props: pass data from parent components to child
class Clock extends Component {
  constructor(props) {
    super(props); // mother function properties
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0

    }
  }

 // has to have this name
 componentWillMount() {
   this.getTimeUntil(this.props.deadline)
 }

 // also This (called life cycle methods)
 componentDidMount() {
   // Need this to keep updating
   // 1000 miliseconds
   setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
 }

 // leading 0 function to handler hours less than 10
 leading0(num) {
   if (num < 10) {
     return '0' + num;
   }
   return num;

   // Alternatively return num < 10 ? '0' + num : num;
 }

 // Const never need updating
 // Let if need updating
 // Date() - current time
 getTimeUntil(deadline) {
   const time = Date.parse(deadline) - Date.parse(new Date());
   // console.log('time', time);

   const seconds = Math.floor((time/1000) % 60);
   const minutes = Math.floor((time/1000/60) % 60);
   const hours = Math.floor((time/(1000*60*60)) % 24);
   const days = Math.floor(time/(1000*60*60*24));

   // console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
   this.setState({days: days, hours: hours, minutes: minutes, seconds});
 }

 render() {

    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
