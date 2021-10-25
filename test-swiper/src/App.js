//https://stackoverflow.com/questions/69202975/module-not-found-cant-resolve-swiper-react
import "./App.css"
import { MySlider } from "./components/SwiperSlider/SwiperSlider";


// import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      {/*<Slider/>*/}
      <MySlider/>
    </div>
  );
}

export default App;
