import React from "react";
import Params from "./Params";
import Screen from "./Screen";
import data from "../data";
import traverserHead from "../utils/traverser";

import { connect } from "react-redux";
import { addBtn } from "../redux/actions/btnActions";

class Constructor extends React.Component {
  componentDidMount() {
    data.forEach((el) => {
      this.props.addBtn({
        id: el.id,
        label: el.label,
        parent: "Params",
        location: { level: null, count: null },
      });
    });
  }

  render() {
    return (
      <div className="constructor">
        <Screen />
        <Params />
        <button className="btn-get-json" type="button" onClick={this.scanDom} />
      </div>
    );
  }

  scanDom = () => {
    const colBar = document.querySelector(".col-bar");
    const rowBar = document.querySelector(".row-bar");

    const jsonObj = {
      cols: traverserHead(colBar, "cols"),
      rows: traverserHead(rowBar, "rows"),
    };

    console.log(jsonObj);
  };
}

const mapStateToProps = (state) => ({
  btns: state.btns,
});

const mapDispatchToProps = (dispatch) => ({
  addBtn: (payload) => dispatch(addBtn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Constructor);
