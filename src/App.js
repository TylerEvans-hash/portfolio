import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/Nav';
import About from './components/About';
import PrevWorks from './components/Prev-Works';

function App() {
  const [prevWorksSelected, setPrevWorksSelected] = useState(false);

  return (
    <div>
      <NavHeader
        setPrevWorksSelected={setPrevWorksSelected}
      ></NavHeader>
      <main>
        {!prevWorksSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <PrevWorks></PrevWorks>
        )}              
      </main>
    </div>
  );
}

export default App;
