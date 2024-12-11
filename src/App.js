import './App.css';
import DarkMode from './components/DarkMode/DarkMode';
import Navbar from './components/DarkMode/Navbar/Navbar.js';
import LegalSolutionsSection from './components/DarkMode/LegalSolutionsSection.js';
import ServicesSection from './components/DarkMode/ServicesSection.js';
import AboutUsSection from './components/AboutUsSection.js';
import PracticeArea from './components/PracticeArea.js';
import MeetOurTeam from './components/MeetOurTeam.js';
import Reviews from './components/Reviews.js';
import News from './components/News.js';
import Footer from './components/Footer.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <DarkMode />
        <LegalSolutionsSection />
      </header>
    
     <main>
       {<ServicesSection />}
      {<AboutUsSection />}
      {<PracticeArea/>}
      {<MeetOurTeam/>}
      {<Reviews/>}
      {<News/>}
     </main>
     
     <footer>
      {<Footer/>}
     </footer>
      
    </div>
  );
}

export default App;


