import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//https://www.npmjs.com/package/react-alice-carousel
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://unsplash.com/photos/nqVYMwM4HtQ" onDragStart={handleDragStart} />,
  <img src="https://unsplash.com/photos/AwYXl6v7qNk" onDragStart={handleDragStart} />,
  <img src="https://unsplash.com/photos/hT7NgJ7fGSs" onDragStart={handleDragStart} />,
];

const Slider = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Slider;