import React from "react";
import Params from "./Params";
import Screen from "./Screen";
import data from "../data";

import { connect } from "react-redux";
import { addBtn } from "../redux/actions";

class Constructor extends React.Component {
  constructor() {
    super();

    // data.forEach((el) => {
    //   store.dispatch(addBtn({ ...el, place: "Params" }));
    // });

    this.state = {
      btns: data.map((el) => {
        return { ...el, place: "Params", isMoving: false };
      }),
    };
  }

  componentDidMount() {
    this.state.btns.forEach((el) => {
      this.props.addBtn(el);
    });
  }

  render() {
    return (
      <div className="constructor">
        <Screen />
        <Params />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  btns: state.btns,
});

const mapDispatchToProps = (dispatch) => ({
  addBtn: (payload) => dispatch(addBtn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Constructor);
