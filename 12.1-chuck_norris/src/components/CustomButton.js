import React from "react";

class CustomButton extends React.Component {
  state = {
    btnType: this.props.type,
    btnValue: this.props.value,
    btnContent: this.props.content,
  };
  handleBtnClick = (e) => {
    const category = e.target.value;
    this.props.onClick(category);
  };
  style = {
    // background: this.state.btnColor,
  };
  render() {
    return (
      <>
        <button
          type={this.state.btnType}
          value={this.state.btnValue}
          // style={this.style}
          onClick={this.handleBtnClick}>
          {this.state.btnContent}
        </button>
      </>
    );
  }
}

export default CustomButton;
