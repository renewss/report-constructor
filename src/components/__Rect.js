import React from "react";
import BtnBottom from "./___BtnBottom";

export default class Rect extends React.Component {
  constructor() {
    super();

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
    this.setState({
      isBtnClicked: true,
      children: [
        ...this.state.children,
        <Rect
          bar={this.props.bar}
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

// const mapStateToProps = (state) => ({
//   btns: [...state.btns],
// });

// const mapDispatchToProps = (dispatch) => ({
//   moveBtnEnd: (payload) => dispatch(moveBtnEnd(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Rect);
