import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/Nav';
import About from './components/About';
import PrevWorks from './components/Prev-Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [ prevWorksSelected, setPrevWorksSelected ] = useState(false);
  const [ contactSelected, setContactSelected ] = useState(false);

  return (
    <div>
      <NavHeader
        setPrevWorksSelected={setPrevWorksSelected}
        setContactSelected={setContactSelected}
      ></NavHeader>
      <main>
        {!contactSelected ? (
          (!prevWorksSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <PrevWorks></PrevWorks>
          ))
        ) : (
          <Contact
            setContactSelected={setContactSelected}
          ></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
