import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Landing, Register, Dashboard, Error } from './components/index'
// import styled from 'styled-components';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Dashboard />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/landing" element={ <Landing />} />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
