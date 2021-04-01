import React from 'react';
import './App.css';

//components
import MyNavBar from "./components/my-navbar/mynavbar.component"
import TitleMessage from './components/title-message/title-message.component'
import Background from './components/background/background.component'
import About from './pages/about/about.component'
import Projects from './pages/projects/projects.cards'
import Skills from './pages/skills/skills.component'
import FooterPage from './pages/footer/footer.jsx'

const App = () => {
  return (
    <div>
      <MyNavBar/>
      <TitleMessage/>
      <Background/>
      <About/>
      <Projects/>
      <Skills/>
      <FooterPage/>

    </div>
  );
}

export default App;
