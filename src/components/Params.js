import React from "react";
import { connect } from "react-redux";
// import axios from "axios";
import RButton from "./RButton";
import store from "../redux/store";

// const token =
//   " Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbiI6ImFkbWluIiwiaXNzIjoiYnVyZ2Vzc19hcGkiLCJpYXQiOjE2MDQ5MTMyNzUsImV4cCI6MTYwNTgxMzI3NX0.n7a_DGxM1bF-Ufp-QS7xpwibthPOQOAsSCjquAFC1ILJzyjwd-pTJIqwAi6jA03_nQ4x7JbIhl5wuZEDiKlv0Q";
// const baseUrl = "https://burgess-api.antexpert.uz";

class Params extends React.Component {
  // async componentDidMount() {
  //   const data = (
  //     await axios.get(`${baseUrl}/open/taxonomy/get_taxo_term_list`, {
  //       headers: {
  //         "X-Authorizantation": token,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //   ).data;

  //   console.log(data);
  // }

  render() {
    return (
      <div
        className="params"
        onDragOver={this.dragOverHandle}
        onDrop={this.dropHandle}
      >
        {store.getState().btns.map((el, i) => {
          if (el.place === "Params")
            return (
              <RButton id={el.id} label={el.label} parent="Params" key={i} />
            );
          else return "";
        })}
      </div>
    );
  }

  dragOverHandle = (e) => {
    e.preventDefault();
  };
  dropHandle = (e) => {
    e.preventDefault();
    const btnId = e.dataTransfer.getData("btn-id");

    const btn = document.getElementById(btnId);
    btn.style.display = "block";

    e.target.appendChild(btn);
  };
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Params);
