const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      unValue: '',
      pValue: '',
    };
  }

  unChange(event){
    let val = event.target.value
    this.setState({
      unValue: val,
    })
  }

  pChange(event){
    let val = event.target.value
    this.setState({
      pValue: val,
    })
  }

  formSub(event){
    event.preventDefault()
    if (this.state.unValue.length > 0  && this.state.pValue.length > 0){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.formSub.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange = {this.unChange.bind(this)} value={this.state.unValue}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" onChange = {this.pChange.bind(this)} value={this.state.pValue} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
