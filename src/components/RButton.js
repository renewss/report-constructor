import React from "react";
import { connect } from "react-redux";
import { moveBtnStart, moveBtnEnd } from "../redux/actions/btnActions";

class RButton extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      id: this.props.id,
      label: this.props.label,
      parent: this.props.parent,
      isMoving: false,
    });
  }

  render() {
    return (
      <button
        id={this.props.id}
        className={this.state.parent === "Params" ? "btn" : "btn-clicked"}
        draggable={true}
        onDragStart={this.dragStartHandle}
        onDragOver={this.dragOverHandle} // prevents from dropping card into card
        onDragEnd={this.dragEndHandle}
      >
        {this.props.label}
      </button>
    );
  }

  dragStartHandle = (e) => {
    // const target = e.target;
    // e.dataTransfer.setData("btn-id", target.id);
    this.props.moveBtnStart({ id: this.state.id });

    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  };

  dragOverHandle = (e) => {
    e.stopPropagation();
  };

  dragEndHandle = (e) => {
    console.log(1);
    setTimeout(() => {
      this.props.moveBtnEnd({ id: this.state.id });
      e.target.style.display = "block";
    }, 0);
  };
}

//
const mapStateToProps = (state) => ({
  btns: [...state.btns],
});

const mapDispatchToProps = (dispatch) => ({
  moveBtnStart: (payload) => dispatch(moveBtnStart(payload)),
  moveBtnEnd: (payload) => dispatch(moveBtnEnd(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RButton);
