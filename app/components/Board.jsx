import React, {Component, PropTypes} from 'react';
import Tile from './Tile.jsx';



export default class Board extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {		
		let tiles = this.props.board.map((array, row)=> {
			return array.map((tile, column)=> {
				let style = {
					top: row * 15,
					left: column * 15,
					background: tile || 'transparent'
				}
				return (
					<Tile key={row*array.length + column}
						  style={style}
						  row={row}
						  column={column}
						  add={this.props.add} />
						)
					})
				})

		return (
			<div className="board">
				{tiles}
			</div>
		)
	}
}



React.propTypes = {
	board: PropTypes.arrayOf(React.PropTypes.number.isRequired),
	add: PropTypes.func.isRequired
}


