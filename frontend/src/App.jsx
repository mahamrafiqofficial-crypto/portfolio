import { Layout } from "./Components/Layout/Layout";
import { About } from "./Pages/About/About";
import { Education } from "./Pages/Educations/Education";
import {Projects} from "./Pages/Projects/Projects";
import { TechStack } from "./Pages/Tech Stack/TechStack";
import { WorkExp } from "./Pages/WorkExp/WorkExp";
import { Contacts } from "./Pages/Contacts/Contacts";
import { Footer } from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { MobileNav } from "./Components/MobileNav/MobileNav";
import { Certifications } from './Pages/Certifications/Certifications';
function App() {
  
 const[theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <MobileNav />
      <Layout />                        
  
  <div className="container">       
    <About />
    <Education />
    <Projects />
    <TechStack />
    <WorkExp />
    <Certifications />
    <Contacts />
  </div>                            
  
  <Footer />   
  </div> 
  <ScrollToTop smooth color="#2d2060"
   style={{backgroundColor:'#ffd700', borderRadius:"80px"}} />                    
    </>
  );
}

export default App
