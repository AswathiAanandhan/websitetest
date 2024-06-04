import logo from './logo.svg';
import './App.css';
import { Topbar } from './Component/Topbar/Topbar';
import { Footer } from './Component/Footer/Footer';
import { Home } from './Component/Home/Home';

function App() {
  return (
    <div className="App">
         <Topbar/>
         <Home/>
         <Footer/>
    </div>
  );
}

export default App;
