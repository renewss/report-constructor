import React from "react";
import Rect from "./__Rect";
import BtnBottom from "./___BtnBottom";

import { connect } from "react-redux";
import { addColRect } from "../redux/actions/colRectActions";

class Colbar extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      children: [
        <Rect
          key={0}
          bar="Column"
          level={1}
          count={0}
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

  componentDidMount() {
    this.props.addColRect({
      parent: { level: 0, count: 0 },
      content: null,
      children: [],
    });
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
  colRects: { ...state.colRects },
});

const mapDispatchToProps = (dispatch) => ({
  addColRect: (payload) => dispatch(addColRect(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Colbar);
