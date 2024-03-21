import React from "react";

function CharacterHeader() {
  return (
    <>
      <div className="character-header">
        <div className="hit-points">
          <div className="hp">
            <button>+</button>
            <button>-</button>
            <h2>50</h2>
            <p>HP</p>
          </div>
          <div>
            <p>36</p>
            <p>Current</p>
          </div>
          <div>
            <p>50</p>
            <p>Max</p>
          </div>
          <div>
            <p>0</p>
            <p>temp</p>
          </div>
        </div>
        <div className="Character-header-right">
          <div>
            <p>16</p>
            <p>AC</p>
          </div>
          <div>
            <p>3</p>
            <p>Initiativ</p>
          </div>
          <div>
            <p>45</p>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterHeader;
