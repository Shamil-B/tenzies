import React from "react";

export default function Header(props) {
  let pos = props.isDark ? "right" : "left";

  let headerStyle = {
    background: props.isDark ? "#111" : "#eee",
    color: "#00ABCA",
  };

  let toggleStyle = {
    background: props.isDark ? "#eee" : "#222",
  };

  let themeStyle = {
    background: props.isDark ? "#222" : "#eee",
    [pos]: 0,
  };

  return (
    <div className="header" style={headerStyle}>
      <div className="title">
        <h1>Tenzies</h1>
      </div>
      <div className="theme" onClick={props.toggler} style={toggleStyle}>
        <div className="toggler" style={themeStyle}></div>
      </div>
    </div>
  );
}
