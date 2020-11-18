import React from "react";
import Rect from "./__Rect";

import { connect } from "react-redux";
import { addRowRect } from "../redux/actions/rowRectActions";

class RowBar extends React.Component {
  constructor() {
    super();

    this.state = {
      children: [
        <Rect
          key={0}
          bar="Row"
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
      id: { level: 1, count: 0 },
    });
  }

  render() {
    return <div className="row-bar">{this.state.children}</div>;
  }

  // addChildHandler = () => {
  //   this.setState({
  //     children: [
  //       ...this.state.children,
  //       <Rect
  //         key={this.state.children.length + 1}
  //         parentBtn={
  //           <BtnBottom
  //             parentCall={this.addChildHandler}
  //             className="btn-right"
  //           />
  //         }
  //       />,
  //     ],
  //   });
  // };
}

const mapStateToProps = (state) => ({
  rowRects: { ...state.rowRects },
});

const mapDispatchToProps = (dispatch) => ({
  addColRect: (payload) => dispatch(addRowRect(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RowBar);
