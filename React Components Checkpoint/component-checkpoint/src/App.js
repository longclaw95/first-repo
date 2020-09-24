import React from 'react';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName'
import ProfilPhoto from './component/profile/ProfilPhoto'
import Icons from './component/profile/Icons'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <h1>User Profile card</h1>
      
        <ProfilPhoto></ProfilPhoto>
        <FullName></FullName>
        <Address></Address>
        <Icons></Icons>
      
    </div>
  );
}

export default App;
