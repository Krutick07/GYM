
import './App.css';
import Footer from './Componnents/Footer/Footer';
import { Hero } from './Componnents/Hero/Hero';
import Join from './Componnents/Join/Join';
import Plans from './Componnents/Plans/Plans';
import { Program } from './Componnents/Programs/Program';
import Reasons from './Componnents/Reasons/Reasons';
import Testimonials from './Componnents/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
