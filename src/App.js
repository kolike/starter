import { Component, useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const Slider = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImages = useCallback(() => {
    console.log('fetching');
    return [
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    ];
  }, []);

  const countTotal = (num) => {
    console.log('counting');
    return num;
  };

  function changeSlide(i) {
    setSlide(slide + i);
  }

  function toggleAutoplay() {
    setAutoplay(!autoplay);
  }

  const total = useMemo(() => {
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(() => ({ color: slide > 4 ? 'red' : 'black' }), [slide]);

  useEffect(() => {
    console.log('styled!');
  }, [style]);

  const myRef = useRef(1);

  const [text, setText] = useState('');

  useEffect(() => {
    console.log(myRef.current);
  });

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <Slide getSomeImages={getSomeImages} />

        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? 'auto' : null}{' '}
        </div>
        <div style={style} className="text-center mt-5">
          Total slide {total} <br />{' '}
        </div>
        <div className="buttons mt-3">
          <button className="btn btn-primary me-2" onClick={() => changeSlide(-1)}>
            -1
          </button>
          <button className="btn btn-primary me-2" onClick={() => changeSlide(1)}>
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
      <input onChange={(e) => setText(e.target.value)} />
      <input onClick={() => myRef.current++} />
    </Container>
  );
};

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);
  return (
    <>
      {images.map((url, i) => (
        <img key={i} className="d-block w-100" src={url} alt="slide" />
      ))}
    </>
  );
};
function App() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button onClick={() => setSlider(false)}>Click</button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default App;
