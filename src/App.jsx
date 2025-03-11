import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TwoSectionLayout from './components/TwoSectionLayout';
import './App.css'
import {MainContent} from "./components/MainContent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import Counter from "./components/Counter";


export default function App() {


  return (
    <>
     
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
      
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
