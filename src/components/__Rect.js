import React from "react";
import BtnBottom from "./___BtnBottom";

import { connect } from "react-redux";
import { addColRect } from "../redux/actions/colRectActions";
import { addRowRect } from "../redux/actions/rowRectActions";

class Rect extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      isBtnClicked: false,
      hasContent: false,
      children: [],
    };
  }

  render() {
    return (
      <div
        className="rectangle"
        onDragOver={this.dragOverHandle}
        onDrop={this.dropHandle}
      >
        {this.props.parentBtn}
        {!this.state.isBtnClicked ? (
          <BtnBottom className="btn-bottom" parentCall={this.addChildHandler} />
        ) : (
          ""
        )}
        {this.state.children}
      </div>
    );
  }

  //

  addChildHandler = () => {
    // Updateing state
    this.setState({
      isBtnClicked: true,
      children: [
        ...this.state.children,
        <Rect
          bar={this.props.bar}
          level={this.props.level + 1}
          count={this.state.children.length}
          key={`${this.props.level + 1}-${this.state.children.length}`}
          addColRect={this.props.addColRect}
          addRowRect={this.props.addRowRect}
          parentBtn={
            <BtnBottom
              parentCall={this.addChildHandler}
              className="btn-right"
            />
          }
        />,
      ],
    });

    // Adding to redux state
    if (this.props.bar === "Column") {
      this.props.addColRect({
        parent: { level: this.props.level, count: this.props.count },
        content: null,
        children: [],
        id: { level: this.props.level + 1, count: this.state.children.length },
      });
    } else {
      this.props.addRowRect({
        parent: { level: this.props.level, count: this.props.count },
        content: null,
        children: [],
        id: { level: this.props.level + 1, count: this.state.children.length },
      });
    }
  };

  dragOverHandle = (e) => {
    e.preventDefault();
  };
  dropHandle = (e) => {
    // if (this.state.hasContent) return;

    e.preventDefault();
    const btnId = e.dataTransfer.getData("btn-id");

    const btn = document.getElementById(btnId);
    btn.style.display = "block";

    e.target.appendChild(btn);
    this.setState({ hasContent: true });
  };
}

const mapStateToProps = (state) => ({
  btns: [...state.btns],
  colRects: { ...state.colRects },
  rowRects: { ...state.rowRects },
});

const mapDispatchToProps = (dispatch) => ({
  addColRect: (payload) => dispatch(addColRect(payload)),
  addRowRect: (payload) => dispatch(addRowRect(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rect);
