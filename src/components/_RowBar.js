import React from "react";
import Rect from "./__Rect";
import BtnBottom from "./___BtnBottom";

export default class RowBar extends React.Component {
  constructor() {
    super();

    this.state = {
      children: [
        <Rect
          key={0}
          parentBtn={
            <BtnBottom
              parentCall={this.addChildHandler}
              className="btn-right"
            />
          }
        />,
      ],
    };
  }

  render() {
    return <div className="row-bar">{this.state.children}</div>;
  }

  addChildHandler = () => {
    this.setState({
      children: [
        ...this.state.children,
        <Rect
          key={this.state.children.length + 1}
          parentBtn={
            <BtnBottom
              parentCall={this.addChildHandler}
              className="btn-right"
            />
          }
        />,
      ],
    });
  };
}
