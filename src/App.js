import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar'
import Welcome from './components/welcome'
import Projects from './components/projects';
import Copyright from './components/copyright';

function App() {
  return (
  
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Welcome/>} exact/>
          <Route path="/projects" element={<Projects/>} exact/>
        </Routes>
        <Copyright/>
    </BrowserRouter>
    
  );
}

export default App;
