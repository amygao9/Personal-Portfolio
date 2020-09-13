import React from 'react';
import './App.css';

//components
import MyNavBar from "./components/my-navbar/mynavbar.component"
import TitleMessage from './components/title-message/title-message.component'
import Background from './components/background/background.component'
import About from './pages/about/about.component'
const App = () => {
  return (
    <div>
      <MyNavBar/>
      <TitleMessage/>
      <Background/>
      <About/>
    </div>
  );
}

export default App;
