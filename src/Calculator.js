import React from 'react';
import ReactDOM from 'react-dom';
import TemperatureInput from './TemperatureInput';

function BoilerVerdict(props) {
	if(props.celsius >= 100)
		return <p>The water would boil.</p>;
	else
		return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrChange = this.handleFahrChange.bind(this);
		this.state = {
			scale: 'c',
			temperature: '',
		};
	}

	handleCelsiusChange(temperature) {
		this.setState({
			scale: 'c',
			temperature
		});
	}

	handleFahrChange(temperature) {
		this.setState({
			scale: 'f',
			temperature
		});
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale ==='f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahr = scale ==='c' ? tryConvert(temperature, toFahr) : temperature;
		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale="f"
					temperature={fahr}
					onTemperatureChange={this.handleFahrChange}
				/>
				<BoilerVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

function toCelsius(fahr) {
	return 5 / 9 * (fahr-32);
}

function toFahr(celsius) {
	return (celsius * 9 / 5) + 32;
}

// takes a string temperature and a convert function as arguments
// and returns converted temperature as a string or returns an empty string on an invalid temperature. 
function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input))
		return '';
	const output = convert(input);
	const roundedOutput = Math.round(output * 100) / 100; //round to the second decimal place
	return roundedOutput.toString();
}

export default Calculator;