import React, { Component } from 'react';
import './InputList.css';

class InputList extends Component { // Smart component
	constructor(props) { // Props are passed here (e.g. heading)
		super();
        this.heading = props.heading;
        this.message = this.message.bind(this);
    }
    
    message() {
        alert('Thanks for your submission!');
      }

	render() { // We return the component HTML in this function
		return (
			<ul>
				<h2>
					{this.heading}
				</h2>

				<li>
                    <input type="text" name="name" placeholder="Food 1" />
				</li>

                <li>
                    <input type="text" name="name" placeholder="Food 2" />
				</li>

                <li>
                    <input type="text" name="name" placeholder="Food 3" />
				</li>

				<button onClick={this.message}>
					Submit
				</button>
			</ul>
        );
	}
}

export default InputList;