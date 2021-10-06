import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const AppContainer = styled.div`
  
  //.carousel {
  //  //display: none;
  //  max-height: 100vh;
  //  height: 100%;
  //}
  //.carousel-inner {
  //  max-height: 100vh;
  //
  //}
`;

function App() {
  return (
    <AppContainer>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://source.unsplash.com/ffJ8Qa0VQU0/800x600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://source.unsplash.com/9Rtp9uvTs3Q/800x600"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://source.unsplash.com/random/800x600"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </AppContainer>
  );
}

export default App;
