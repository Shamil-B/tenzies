import React from "react";
import Data from "../data";

export default function Tenzies(props) {
  let [data, setData] = React.useState(Data);

  let winnerWindowClass = checkForWinner() ? "winner-window" : "not-visible";

  let mainStyle = {
    background: props.isDark ? "#222" : "#ddd",
    color: "#00ABCA",
  };

  let subStyle = {
    background: props.isDark ? "#333" : "#ccc",
    color: props.isDark ? "#eee" : "#000",
  };

  const newData = data.map((item) => (
    <li
      className={item.isFreezed ? "freezed" : ""}
      key={item.id}
      onClick={() => {
        freez(item.id);
      }}
    >
      {item.val}
    </li>
  ));

  function freez(id) {
    setData((prevData) => {
      for (let i = 0; i < prevData.length; i++) {
        if (prevData[i].id === id) {
          prevData[i] = { ...prevData[i], isFreezed: !prevData[i].isFreezed };
        }
      }

      const newData = [...prevData];
      return newData;
    });
  }

  function roll() {
    setData((prevData) => {
      for (let i = 0; i < prevData.length; i++) {
        var box = { ...prevData[i] };
        if (!prevData[i].isFreezed) {
          box = {
            ...prevData[i],
            val: Math.floor(Math.random() * 6) + 1,
          };
        }

        prevData[i] = box;
      }

      const res = [...prevData];
      return res;
    });
  }

  function checkForWinner() {
    console.log(data);
    let val = data[0].val;
    for (let box of data) {
      if (!box.isFreezed || val !== box.val) {
        return false;
      }
    }

    return true;
  }

  function reload() {
    window.location.reload();
  }

  return (
    <div className="game-section" style={mainStyle}>
      <div className="content" style={subStyle}>
        <h1>Tenzies</h1>
        <p style={{ width: "50%", textAlign: "center" }}>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <ul style={{ color: "#000" }}>{newData}</ul>
        <button onClick={roll}>Roll</button>
      </div>

      <div className={winnerWindowClass}>
        <h1>YOU WON!</h1>
        <button onClick={reload}>Play Again!</button>
      </div>
    </div>
  );
}
