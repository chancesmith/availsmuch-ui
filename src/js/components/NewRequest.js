import React, {Component} from 'react';

class NewRequest extends Component {
   render() {
      return (
        <div id="add-request" className="container">
	        <form action="" method="POST" role="form">
				<label for="">Create Request</label>
				<input type="text" className="form-control"/>
				<button type="submit" className="btn btn-default">Submit</button>
			</form>
        </div>
      )
   }
}

export default NewRequest;
