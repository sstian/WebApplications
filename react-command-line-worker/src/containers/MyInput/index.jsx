import { Space, Input, Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { newRowData } from "../../redux/actions/rowData";
import * as TextUtil from "../../utils/TextUtil";

const { TextArea } = Input;

class MyInput extends React.Component {
  state = {
    source: "",
    destination: ""
  };

  onChange = (event) => {
    const { name, value } = event.target;
    console.log(`MyInput - onChange(): name = ${name}, value = ${value}`);
    switch (name) {
      case "source":
        console.log("here is source");
        this.setState({ source: value });
        break;
      // case "destination":
      //   console.log("here is destination");
      //   this.setState({ destination: value });
      //   break;
      default:
        break;
    }
  };

  startToWork = () => {
    console.log("MyInput - startToWork()");

    const { source } = this.state;
    console.log("source text = ", source);

    const newRowData = TextUtil.pareCommandLine(source);

    this.props.newRowData(newRowData);
  }

  copyToClipboard = () => {
    console.log("MyInput - copyToClipboard()");
  }

  componentDidMount() {
    console.log("MyInput - componentDidMount()");
  }

  componentDidUpdate() {
    console.log("MyInput - componentDidUpdate()");
    console.log('this.props.commandLine\n', this.props.commandLine);
  }

  render() {
    console.log("MyInput - render()");
    return (
      <Space size="small" direction="vertical" className="column1">
        <TextArea rows={12} placeholder="1. put your command line here"
          name="source" onChange={this.onChange} />
        <Button type="primary" onClick={this.startToWork}>2. start to work</Button>
        {/* <button onClick={this.copyToClipboard}>4. copy to clipboard</button> */}
        <TextArea id="destinationText" rows={12} placeholder="4. result is here"
          name="destination" onChange={this.onChange} value={this.props.commandLine} />
      </Space>
    )
  }
}

export default connect(
  state => ({
    commandLine: state.commandLine
  }),
  { newRowData }
)(MyInput);
