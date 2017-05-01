import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCount } from '../actions/index';
import { bindActionCreators } from 'redux';

class Counter extends Component {
	render() {
		return (
			<div>
				<button onClick={() => this.props.addCount(this.props.count)}>+</button>
				<div>{this.props.count}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		count: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addCount: addCount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);