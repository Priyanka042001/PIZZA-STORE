import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AddPizza from './components/AddPizza';
import UpdatePizza from './components/UpdatePizza';
import ContactUs from './components/Contact';

function App() {
  return (
    <>
<Navbar/>
  <BrowserRouter>
  <Routes>
    <Route>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/addpizza" element={<AddPizza />} />
      <Route index path="/UpdatePizza/:id" element={<UpdatePizza />} />
      <Route path="/Contact" element={<ContactUs />} />



    </Route>
  </Routes>
</BrowserRouter>
<Footer/>
   
    </>
  );
}

export default App;
