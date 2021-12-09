import { useState } from 'react';
import './App.css';

function App() {

  console.log('App rendered.');

  // Define a state variable for the label text
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define a function that runs when the button is clicked
  function onButtonClick() {
    console.log('button was clicked');
    setIsDarkMode(!isDarkMode);
  }

  // Return HTML to be rendered
  return (
    <div className='container'>
      <div className='label'>
        {isDarkMode ? 'Off' : 'On'}
      </div>
      <button onClick={onButtonClick} className='lightswitch'>
        Lightswitch
      </button>
    </div>
  );
}

export default App;
