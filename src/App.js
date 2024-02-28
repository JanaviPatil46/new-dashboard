import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
// import Home from './Home';
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'
import Product from '../src/Pages/Product'
import Insights from './Pages/Insights';
function App() {
  return (
    <>
    <Router>
      <div className='app'>
        <Sidebar/>
        <div className='navbar col-12'>
          <Navbar/>
          <div className='content col-12'>
            <Routes>
              <Route path='/' element={<Insights/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/product' element={<Product/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
