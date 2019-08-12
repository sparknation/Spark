import React, {Component} from 'react';

class SparkIcon extends Component {

	render() {
		return (
			<div>
				<button className="btn btn-primary btn-xl">
					<div>{this.props.spark.title}</div>
					<div>{this.props.spark.creator}</div>
				</button>
			</div>
		);
	}
}

export default SparkIcon