import "./App.css";
import Accordion from "./components/accordion/accordion";
import GitHubProfileFinder from "./components/github-profile-finder/profileFinder";
import ImageSlider from "./components/image-slider/image-slider";
import { menus } from "./components/nav-bar/data";
import NavBar from "./components/nav-bar/navBar";
import PopUpMain from "./components/popup-model/popup-main";
import { QrCodeGenerator } from "./components/qr-code/code";
import ColorGenerator from "./components/randomcolor/colorgenerator";
import ScrollIndicator from "./components/scroll/scroll";
import ShowMore from "./components/show-more/showMore";
import StarRating from "./components/starRatiing/rating";
import TabsData from "./components/tabs/tabs-data";
import Theme from "./components/theme/theme";

function App() {
  return (
    <div className="App">
      {/* <Accordion/> 
     < ColorGenerator /> 
     < StarRating /> 
     <ImageSlider url = {`https://picsum.photos/v2/list`} page={'1'} />
     < ShowMore /> 
     < NavBar menus ={menus}/> 
     < QrCodeGenerator />
     < Theme /> 
     < ScrollIndicator url = {"https://dummyjson.com/products?limit=100"} />
     < TabsData /> 
  < PopUpMain />*/} 
      < GitHubProfileFinder />
    </div>
  );
}

export default App;
