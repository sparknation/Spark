import React, {Component} from 'react';
import SparkIcon from "./SparkIcon"

class DisplaySparks extends Component {
	render() {
		const list_items = this.props.sparks.map(item => (
			<div>
				<div>{item.title}</div>
				<div>{item.creator}</div>
				<div>{item.spark_count}</div>
				<div>{item.date_created}</div>
			</div>
		));
		//splits into three columns
		const split_sparks = this.props.sparks.map((item, i) => {
			return (i % 3 === 0 ? this.props.sparks.slice(i, i+3) : null);
		}).filter(x => x != null)

		return (
			<div className="spark-gallery">
				<div>
					{split_sparks.map((row, i) => {
						return (
							<div className="row top-buffer" align="center">
								{row.map(col_item => 
									<div className="col" align="center">
									<SparkIcon spark={col_item}/>
									</div>
								)}
							</div>
						)
					})}
	    		</div>
			</div>
		)
	}
}

export default DisplaySparks