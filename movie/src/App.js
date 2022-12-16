// import "./App.css";
import {Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Basket from "./pages/Basket";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/" element={<Basket/>} /> 
          <Route path="/saved-lists" element={<Basket/>} /> 
          <Route path="/saved-lists" element={<Basket/>} /> 
          <Route path="/list/:id"  element={<ListPage/>} />

        </Routes>
    </>
  );
}

export default App;
