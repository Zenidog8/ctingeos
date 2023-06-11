import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";

function App() {
 return (
   <>
     <Routes>
       <Route path="/" element={<Inicio />} />
       <Route
         render={() => (
           <div>
             <Navbar />
             <br /> <br />
             <h1 className="text-center p-5"> 404 Page not found</h1>
             <Footer />
           </div>
         )}
       />
     </Routes>
   </>
 );
}

export default App;
