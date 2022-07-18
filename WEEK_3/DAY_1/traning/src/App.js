import './App.css';
import Header from './component/header.component';
import Navbar from './component/navbar.component';
import Section from './component/section.component';
import Location from './component/location.component';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Header/>
  <Section/>
  <Location/>
    </div>
  );
}

export default App;
