
// -------------------------------------------------- import module --------------------------------------------------------
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// -------------------------------------------------- import all pages ---------------------------------------------------

import Layout from './Layout';


// -------------------------------------------------- return all routes --------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  index element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
