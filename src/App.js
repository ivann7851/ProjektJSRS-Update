import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PSL from './Components/PSL';
import Lawyers from './Components/Lawyers';
import Lawsuits from './Components/Lawsuits';
import Footer from './Footer';
import Clients from './Components/BecomeaClient';
import Prijenos from './Components/prop1';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<PSL/>}></Route>
          <Route path='/Lawyers' element={<Prijenos/>}></Route>
          <Route path='Lawsuits' element={<Lawsuits/>}></Route>
          <Route path='BecomeaClient' element={<Clients/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
