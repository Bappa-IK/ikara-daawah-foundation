import './App.css';
import Main from './components/Pages/Main';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import About from './components/Pages/About';
import Media from './components/Pages/Media';
import Contact from './components/Pages/Contact';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/media' element={<Media />} />
          <Route path='/contact' element={<Contact />} />              
        </Routes>

        <Footer />
      </BrowserRouter>

      </div>
  );
}

export default App;
