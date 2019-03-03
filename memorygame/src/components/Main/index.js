import React from "react";
import './style.css';

function Main(props) {
    return (
      <div className='main'>
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          {/* <span onClick={() => props.shuffle(props.id)} className="shuffle">
            𝘅
          </span> */}
        </div>
      </div>
    );
  }
  
  export default Main;
  