import './App.css'
import {MainContent} from "./components/MainContent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


export default function App() {


  return (
    <>
     
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
