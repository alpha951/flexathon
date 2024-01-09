import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
// import CSVData from "./components/CSVData";

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />
          {/* <CSVData /> */}
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
