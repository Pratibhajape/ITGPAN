import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import './App.css';

import Home from "./home";
import About from "./pages/about";
import Team from "./pages/team";

function App() {
  return (
    <div className="App">
       <Router> 
 
     <Routes>
      <Route path="Home" element={<Home/>}/>
     <Route path="*" element={<About/>}/> 
    <Route path="Team"  element={<Team/>}/> 
    </Routes>
    
  </Router> 
  
 
  
    </div>
  );
}
export default App;




