import React from "react";
import CustomButton from "./components/CustomButton";
import "./App.css";

class App extends React.Component {
  state = { selectedColor: "" };
  handleClick = (color) => {
    this.setState({ selectedColor: color });
    console.log(color);
  };
  creatButtons = (colors) => {
    let buttonsElementsArray = [];
    for (let color of colors) {
      buttonsElementsArray.push(
        <CustomButton
          type="button"
          value={color}
          buttonColor={color}
          onClick={this.handleClick}
        />,
      );
    }
    return buttonsElementsArray;
  };

  render() {
    const colors = ["blue", "red", "yellow"];

    return (
      <div>
        {this.creatButtons(colors)}
        <h2>the color is: {this.state.selectedColor}</h2>
      </div>
    );
  }
}

export default App;
