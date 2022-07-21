import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import './App.css';
import Navbar from './component/navbar.component';
import Home from "./Home";
import NotFound from './pages/notfound.page';

import Footer from './component/footer.component';

function App() {
  return (
    <div className="App">
  <Router>
  <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*"  element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </Router>
  

 
   <NotFound/> 
    </div>
  );
}

export default App;
