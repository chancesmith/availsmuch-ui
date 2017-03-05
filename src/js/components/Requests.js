import React, {Component} from 'react';

class Requests extends Component {
   constructor(props) {
      super(props);

      this.state = {
         requests: [
            "Matt's Request",
            "Matt's Request",
            "Matt's Request",
            "Matt's Request",
            "Ian's request"]
      }
   }

   render() {
      return (
         <center>
            {
               this.state.requests.map(request =>
                  <h3>{request}</h3>
               )
            }
         </center>
      )
   }
}

export default Requests;
