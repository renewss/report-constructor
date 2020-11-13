import React from "react";
import { connect } from "react-redux";
import store from "../redux/store";
import ColBar from "./_ColBar";
import RowBar from "./_RowBar";
import RButton from "./RButton";

class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        <div></div>
        <ColBar />
        <RowBar />

        {store.getState().btns.map((el, i) => {
          if (el.place === "Screen")
            return (
              <RButton
                btn-id={el.id}
                label={el.label}
                parent="Screen"
                key={i}
              />
            );
          else return "";
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  btns: { ...state.btns },
});

export default connect(mapStateToProps)(Screen);
