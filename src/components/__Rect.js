import React from "react";
import BtnBottom from "./___BtnBottom";
import RButton from "./RButton";

import { connect } from "react-redux";
import { addColRect } from "../redux/actions/colRectActions";
import { addRowRect } from "../redux/actions/rowRectActions";
import { dropBtn } from "../redux/actions/btnActions";

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

        {this.props.btns.map((el) => {
          // checking redux store for RButton elements that have location of current rect
          if (el.parent === this.props.bar)
            if (
              el.location.level === this.props.level &&
              el.location.count === this.props.count
            )
              return (
                <RButton
                  id={el.id}
                  label={el.label}
                  parent={this.props.bar}
                  key={el.id}
                />
              );

          return "";
        })}
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
        <ConenctedRect
          bar={this.props.bar}
          level={this.props.level + 1}
          count={this.state.children.length}
          key={`${this.props.level + 1}-${this.state.children.length}`}
          // btns={this.props.btns}
          // addColRect={this.props.addColRect}
          // addRowRect={this.props.addRowRect}
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
    let addRect;
    if (this.props.bar === "Column") addRect = this.props.addColRect;
    else addRect = this.props.addRowRect;

    addRect({
      parent: { level: this.props.level, count: this.props.count },
      content: null,
      children: [],
      id: { level: this.props.level + 1, count: this.state.children.length },
    });
  };

  dragOverHandle = (e) => {
    if (this.state.hasContent) return;
    e.preventDefault();
  };
  dropHandle = (e) => {
    if (this.state.hasContent) return;
    e.preventDefault();
    e.stopPropagation();

    const btn = this.props.btns.filter((el) => el.isMoving)[0]; // find moving button
    this.props.dropBtn({
      id: btn.id,
      parent: this.props.bar,
      location: { level: this.props.level, count: this.props.count },
    });

    this.setState({ hasContent: true });

    document.getElementById(btn.id).style.display = "block";
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
  dropBtn: (payload) => dispatch(dropBtn(payload)),
});

const ConenctedRect = connect(mapStateToProps, mapDispatchToProps)(Rect);
export default ConenctedRect;
