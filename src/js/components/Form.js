import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Form extends Component {
  constructor() {
    super();
    this.state = { inputVal: '' };
  }
  handleChangeInput = () => this.setState({inputVal: this.textInput.value})
  
  handleSubmit = (e) => {
    this.props.clearState();
    e.preventDefault();
    this.props.getStops(this.textInput.value, this.props.config.direction);
  }
  
  handlerChance = (e) => this.props.changeConfig(e.target.value);
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Choose Bus number and Direction:</h2>
        <input type="text" className="bus-number"  onChange={this.handleChangeInput} ref={(input) => { this.textInput = input; }}/>
        <div>
          <label>
            <input type="radio"
                   id="inbound"
                   name="Direction"
                   value="inbound"
                   onChange={this.handlerChance}
                   checked={this.props.config.direction === 'inbound'}
            />
            <label htmlFor="inbound">Inbound</label>
          </label>
          <label>
            <input type="radio"
                   id="outbound"
                   name="Direction"
                   value="outbound"
                   onChange={this.handlerChance}
                   checked={this.props.config.direction === 'outbound'}

            />
            <label htmlFor="outbound">Outbound</label>
          </label>
        </div>
        <button type="submit" disabled={!this.state.inputVal}>Let's see</button>

      </form>
    );
  }
}

Form.propTypes = {
  getStops: PropTypes.func,
};
