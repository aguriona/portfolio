import './App.css'
import {Routes, Route} from  'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Header from './components/Header';
import Landing from './pages/Landing';
import Work from './views/Work';
import Contact from './views/Contact';
import Skills from './views/Skills';


function App() {

  return (
    <div className="App bg-bglight mt-20 ">
      <Header />
      <ScrollToTop smooth 
      width="40"
      height='32'
      color='#C85853'
      />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
