import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
//import { Container } from 'react-bootstrap';
import './index.css';

// function useInputWithValidate(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   const validateInput = () => {
//     return value.search(/\d/) >= 0;
//   };

//   return { value, onChange, validateInput };
// }

// const Slider = (props) => {
//   const [slide, setSlide] = useState(0);
//   const [autoplay, setAutoplay] = useState(false);

//   const getSomeImages = useCallback(() => {
//     return [
//       'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
//       'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
//     ];
//   }, []);

//   const countTotal = (num) => {
//     return num;
//   };

//   function changeSlide(i) {
//     setSlide(slide + i);
//   }

//   function toggleAutoplay() {
//     setAutoplay(!autoplay);
//   }

//   const total = useMemo(() => {
//     return countTotal(slide);
//   }, [slide]);

//   const style = useMemo(() => ({ color: slide > 4 ? 'red' : 'black' }), [slide]);

//   useEffect(() => {}, [style]);

//   const myRef = useRef(1);

//   useEffect(() => {});

//   const input = useInputWithValidate('');
//   const textArea = useInputWithValidate('');
//   console.log('input:', input);
//   const color = input.validateInput() ? 'text-danger' : null;
//   const colorTextArea = input.validateInput() ? 'text-success' : null;

//   return (
//     <Container>
//       <div className="slider w-50 m-auto">
//         <Slide getSomeImages={getSomeImages} />

//         <div className="text-center mt-5">
//           Active slide {slide} <br /> {autoplay ? 'auto' : null}{' '}
//         </div>
//         <div style={style} className="text-center mt-5">
//           Total slide {total} <br />{' '}
//         </div>
//         <div className="buttons mt-3">
//           <button className="btn btn-primary me-2" onClick={() => changeSlide(-1)}>
//             -1
//           </button>
//           <button className="btn btn-primary me-2" onClick={() => changeSlide(1)}>
//             +1
//           </button>
//           <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
//             toggle autoplay
//           </button>
//         </div>
//       </div>
//       <div className="text-center mt-5 mb-5">
//         <input value={`${input.value} /  ${textArea.value}`} readOnly />
//         <input onChange={input.onChange} value={input.value} className={`form-control ${color}`} />
//         <textarea
//           value={textArea.value}
//           onChange={textArea.onChange}
//           className={`form-control ${colorTextArea}`}
//           rows="3"
//         ></textarea>
//       </div>
//     </Container>
//   );
// };

// const Slide = ({ getSomeImages }) => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     setImages(getSomeImages());
//   }, [getSomeImages]);
//   return (
//     <>
//       {images.map((url, i) => (
//         <img key={i} className="d-block w-100" src={url} alt="slide" />
//       ))}
//     </>
//   );
// };
// function App() {
//   const [slider, setSlider] = useState(true);

//   return (
//     <>
//       <button onClick={() => setSlider(false)}>Click</button>
//       {slider ? <Slider /> : null}
//     </>
//   );
// }

// export default App;

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const rndCounter = () => {
    setCounter(Math.floor(Math.random() * 100 - 50));
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  const incCounter = () => {
    if (counter < 50) {
      setCounter((counter) => counter + 1);
    }
  };

  const decCounter = () => {
    if (counter > -50) {
      setCounter((counter) => counter - 1);
    }
  };

  return { counter, rndCounter, resetCounter, incCounter, decCounter };
};

const Counter = (props) => {
  const { counter, rndCounter, resetCounter, incCounter, decCounter } = useCounter(props.counter);

  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={incCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  );
};

const RndCounter = (props) => {
  const { counter, rndCounter, resetCounter } = useCounter(props.counter);

  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={rndCounter}>RND</button>
        <button onClick={() => resetCounter(props.counter)}>RESET</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Counter counter={0} />
      <RndCounter counter={5} />
    </>
  );
};

export default App;
