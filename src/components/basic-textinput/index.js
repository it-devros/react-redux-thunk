import React from 'react';
import PropTypes from 'prop-types';


class TextInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: '',
			value: this.props.initial || '',
		}

		this.changeValue = this.changeValue.bind(this);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.initial == '' || newProps.initial == undefined) {
			this.setState({ value: '' });
		}
	}

	changeValue(e) {
		e.preventDefault();
		this.setState({ value: e.target.value });
		if (this.props.withValid == 'false') {
			this.props.changed(e.target.value);
		} else {
			if (this.validate(e.target.value)) {
				this.setState({ error: '' });
				this.props.changed(this.props.field, e.target.value);
			} else {
				this.props.changed(this.props.field, 'not_valid');
			}
		}
	}

	validate(val) {
		if (val == '') {
			this.setState({ error: '*This field required.' });
			return false;
		}
		if (this.props.type == 'email') {
			if (val.indexOf('@') == -1) {
				this.setState({ error: '*email is not valid.' });
				return false;
			}
		}
		return true;
	}

	render() {
		return ( 
			<div>
				<input type={this.props.type} className={this.props.className} placeholder={this.props.placeholder} value={this.state.value} onChange={this.changeValue} />
				<span className="text-danger">{ this.state.error }</span>
			</div>
		);
	}

}

TextInput.propTypes = {
	placeholder: PropTypes.string,
	className: PropTypes.string,
	changed: PropTypes.func,
	initial: PropTypes.string,
	withValid: PropTypes.string,
	field: PropTypes.string,
	type: PropTypes.string,
};

export default TextInput;
