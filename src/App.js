import './App.css';

import Contents from './components/Contents';
import Features from './components/Features';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='h-screen bg-[#181818]'>
      <Nav/>
      <Landing/>
      <Features/>
      <Contents/>
      <Partners/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
