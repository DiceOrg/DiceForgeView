import React from "react";

function MainPage() {
  return (
    <>
      <div>
        <header>Big Header</header>
        <div className="container">
          <div className="column">
            <div className="box">Container 1 - Box 1</div>
            <div className="box">Container 1 - Box 2</div>
            <div className="box">Container 1 - Box 3</div>
          </div>
          <div className="column">
            <div className="box">Container 2 - Box 1</div>
            <div className="box">Container 2 - Box 2</div>
            <div className="box">Container 2 - Box 3</div>
          </div>
          <div className="column">
            <div className="box">Container 3 - Box 1</div>
            <div className="box">Container 3 - Box 2</div>
            <div className="box">Container 3 - Box 3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
