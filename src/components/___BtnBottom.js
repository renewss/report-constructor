import React from "react";

export default function BtnBottom(props) {
  const dragOverHandle = (e) => {
    e.stopPropagation();
  };
  return (
    <button
      className={props.className}
      onClick={props.parentCall}
      onDragOver={dragOverHandle}
    >
      {" "}
    </button>
  );
}
