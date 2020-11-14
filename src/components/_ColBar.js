import React from "react";
import Rect from "./__Rect";
import BtnBottom from "./___BtnBottom";

import { connect } from "react-redux";
import { addBtn } from "../redux/actions";

class Colbar extends React.Component {
  constructor() {
    super();

    this.state = {
      children: [
        <Rect
          key={0}
          bar="Column"
          // parentBtn={
          //   <BtnBottom
          //     parentCall={this.addChildHandler}
          //     className="btn-right"
          //   />
          // }
        />,
      ],
    };
  }
  render() {
    // // Setting blank area height according to colbar
    // const root = document.documentElement;
    // const colbar = document.querySelector(".col-bar");
    // console.log(colbar);
    // if (!!colbar)
    //   root.style.setProperty(
    //     "--screen-blank-height",
    //     window.getComputedStyle(colbar).height
    //   );

    // console.log(root.style.getPropertyValue("--screen-blank-height"));

    return <div className="col-bar">{this.state.children}</div>;
  }

  addChildHandler = () => {
    this.setState({
      children: [
        ...this.state.children,
        <Rect
          key={this.state.children.length + 1}
          bar="Column"
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

const mapStateToProps = (state) => ({
  btns: state.btns,
});

const mapDispatchToProps = (dispatch) => ({
  addBtn: (payload) => dispatch(addBtn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Colbar);
