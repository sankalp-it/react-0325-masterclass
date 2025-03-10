import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TwoSectionLayout from './components/TwoSectionLayout';
import './App.css'
import MainContent from "./components/MainContent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { TaskList } from "./components/TaskList";
import Counter from "./components/Counter";

export default function App() {
  const [newCount, setNewCount] = useState(0);

  const [show,setShow] = useState(true);
  function handleOperation(operator) {
    if (operator == '+') {
      setNewCount(newCount + 1);
    } else {
      setNewCount(newCount - 1);
    }
  }

  const handleReset = () => {
    setNewCount(0);
  } 

  return (
    <>
      <Header />
      <div className="App">
        <h1>This is main section</h1>
        <Counter count={newCount} handleOperation={handleOperation} handleReset={handleReset}/>
        <button className='trigger' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        {show && <TaskList />}
      </div>
      <Footer />
      {/* <TwoSectionLayout
        leftContent={
          <div>
            <h1>Navigation</h1>
            <p>This is the content for the Navigation Bar.</p>
          </div>
        }
        rightContent={
          <MainContent />    
        }
      /> */}
    </>
  );
}
