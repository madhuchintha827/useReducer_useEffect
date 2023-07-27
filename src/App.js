import React from 'react'
import FetchingData from './components/FetchingData';

function App() {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a href="/" className='navbar-brand'>useReducer with useEffect</a>
      </nav>
      <FetchingData/>
    </React.Fragment>
  );
}

export default App;
