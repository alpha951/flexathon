// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Form from "./components/Form";
// import Navbar from "./components/Navbar";
// import Dashboard from "./components/Dashboard";
// import EditPage from "./components/Edit";
// // import { useState } from "react";
// // import CSVData from "./components/CSVData";

// function App() {
//   // const [state, setState] = useState({
//   //state={state} setStore={setState}
//   // x: ''});
//   return (
//     <>
//       <Router>
//         <div className='container'>
//           <Navbar />
//           {/* <CSVData /> */}
//           <Routes>
//             <Route path='/' element={<Form />} />
//             <Route path='/dashboard' element={<Dashboard />} />
//             <Route path='/edit-page' component={EditPage} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

// // setStore({
// // ...state,
// // x: 'hello'
// // })

// export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import EditPage from "./components/Edit";
import { useState } from "react";

function App() {
  const [selectedRow, setSelectedRow] = useState({});
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Form />} />
            <Route
              path='/dashboard'
              element={
                <Dashboard
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                />
              }
            />
            <Route
              path='/edit-page'
              element={
                <EditPage
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
