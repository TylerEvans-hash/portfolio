// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <NavHeader></NavHeader>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
