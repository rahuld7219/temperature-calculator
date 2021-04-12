import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {temperature: ''};
	}

	handleChange(e) {
		this.setState({
			temperature: e.target.value
		});
	}

	render() {
		const temperature = this.state.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter Temperature in {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset> 
		);
	}
}

export default TemperatureInput;