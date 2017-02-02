const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  validation(event){
    this.setState({
      value: event.target.value
    })
    if(event.target.value.length>0){
      let lineSplit = event.target.value.split('\n')
      if(lineSplit.length === 3){
        let one = lineSplit[0].trim().split(' ')
        let two = lineSplit[1].trim().split(' ')
        let three = lineSplit[2].trim().split(' ')

        if(one.length === 5 && two.length === 3 && three.length === 5){
          this.setState({
            valid: true
          })
        }
      }
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.validation.bind(this)}/>
        {this.state.valid ? null:
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        }
      </div>
    );
  }
}

module.exports = PoemWriter;
