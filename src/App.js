import './App.css';
import Accordion from './components/accordion/accordion';
import ImageSlider from './components/image-slider/image-slider';
import { menus } from './components/nav-bar/data';
import NavBar from './components/nav-bar/navBar';
import { QrCodeGenerator } from './components/qr-code/code';
import ColorGenerator from './components/randomcolor/colorgenerator';
import ShowMore from './components/show-more/showMore';
import StarRating from './components/starRatiing/rating';
import Theme from './components/theme/theme';

function App() {
  return (
    <div className="App">
    {/* <Accordion/> 
    < ColorGenerator /> 
    < StarRating /> 
    <ImageSlider url = {`https://picsum.photos/v2/list`} page={'1'} />
     < ShowMore /> 
     < NavBar menus ={menus}/> 
     < QrCodeGenerator /> */}
     < Theme />
    </div> 
  );
}

export default App;
