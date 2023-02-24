import './App.css';
import React, {useEffect, useState} from 'react';
import Template from './Template';

function App() {
  const [userInfo, setUserInfo] = useState({name: "John Doe"})
  
  useEffect(() => {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfoObj = JSON.parse(userInfoString);
      setUserInfo(userInfoObj);
    }
  }, []);

  return (
    <Template>
       <div className="container">
      <h1>Welcome,{userInfo.name}!</h1>
      <p>You are Click Closer to your millions!</p>
    </div>
  </Template>
  );
}

export default App;
