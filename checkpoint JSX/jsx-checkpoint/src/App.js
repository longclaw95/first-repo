import React from 'react';
import carImage from "./carimage.jpg"
import Video from "./myVideo.mp4";

import './App.css';

import './style.css';

function App() {
  return (
    <div style={{border:"solid 1px black", maxwidth:"100vw"}}>
      <h1 className="title red">Wassim</h1>
      <br ></br>
      <br ></br>
      <img  src={carImage} ></img>
      <br ></br>
      <br ></br>
      <img  src="/car.png" ></img>
      <br ></br>
      <br ></br>
      
      <video width="320" height="440" src={Video} controls/>

      

      

    </div>


  );
}

export default App;
