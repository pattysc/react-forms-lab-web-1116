const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange(event){
    let val = event.target.value
    this.setState({
      value: val
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <div>{this.props.maxChars - this.state.value.length}</div>
      </div>
    );
  }
}

module.exports = TwitterMessage;
