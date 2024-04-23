import Navbar from './components/nav/Navbar';
import Intro from './intro/Intro';
import Skill from './skills/Skill';
import Work from './works/Work';
import Contact from './contact/Contact';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skill/>
     <Work/>
     <Contact/>
    </div>
  );
}

export default App;
