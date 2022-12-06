import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Pages/Header';
import './App.css'
import Banner from './Pages/Banner';
import AboutJobCard from './Pages/AboutJobCard';
import BannerSecond from './Pages/BannerSecond';
import Pricing from './Pages/Pricing';
import Footer from './Pages/Footer';


function App() {
  return (
    
    <div className='App'>
      <Header/>
      <Banner/>
      <AboutJobCard/>
      <BannerSecond/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
