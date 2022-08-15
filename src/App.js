import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Pay from './pages/paypal';
import ReactP from './pages/react';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Pay />} />
          <Route exact path='/react' element={<ReactP />} />
          <Route exact path='/react' element={<ReactP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

