import React, {Component} from 'react';

class PrayerList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         list: [
            "Pray for Ian",
            "Pray for Mom",
            "Pray for School"
         ]
      }
   }

   render() {
      return (
         <center>
            {
               this.state.list.map(prayer => <h3>{prayer}</h3>)
            }
         </center>
      )
   }
}

export default PrayerList;
