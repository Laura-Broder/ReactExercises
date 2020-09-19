import React from "react";

class CustomButton extends React.Component {
  state = {
    btnType: this.props.type,
    btnValue: this.props.value,
    btnColor: this.props.buttonColor,
  };
  handleBtnClick = (e) => {
    const color = e.target.value;
    this.props.onClick(color);
  };
  style = {
    background: this.state.btnColor,
  };
  render() {
    return (
      <div>
        <button
          type={this.state.btnType}
          value={this.state.btnValue}
          style={this.style}
          onClick={this.handleBtnClick}>
          {this.state.btnValue}
        </button>
      </div>
    );
  }
}

export default CustomButton;
