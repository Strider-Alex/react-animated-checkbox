import CheckBox from '../lib/index.js';
import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      checked:false
    };
  }
  render() {
    return (
      <div style={{ marginTop: 200, textAlign: "center" }}>
        <CheckBox
          checked={this.state.checked}
          checkBoxStyle={{
            checkedColor: "#34b93d",
            size: 100,
            unCheckedColor: "#b8b8b8"
          }}
          duration={400}
          onClick={()=>{this.setState({ checked:!this.state.checked });}}
        />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('content'));