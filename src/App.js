import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

import './styles/App.scss';
import './styles/Nav.scss';
import './styles/Home.scss';
import './styles/Contact.scss';
import './styles/Footer.scss';
import './styles/mediaquery.scss';

function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;