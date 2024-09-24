/**
 * @description This is the main component of the application which uses Facebook Pixel for event tracking
 * @namespace App
 * @function App
 * @returns {JSX.Element} The JSX element of the application
 * @example
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import App from './App';
 *
 * ReactDOM.render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>,
 *   document.getElementById('root')
 * );
 */
import { useEffect } from "react";
// import useFacebookPixel from "./hooks/facebookPixelHook";
import {
  facebookPageView,
  facebookSubmitFormEvent,
} from "./utils/facebookEvents";

const App = () => {
  // useFacebookPixel();

  useEffect(() => {
    // Sample code for tracking events using Facebook Pixel
    facebookPageView();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Sample code for tracking events using Facebook Pixel
    facebookSubmitFormEvent();
  };

  return (
    <div>
      <h1>Facebook Pixel code with React</h1>

      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
