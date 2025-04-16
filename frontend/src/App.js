
import './App.css';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import Man from './pages/Man'
import Home from './pages/Home';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Leaving from './pages/Leaving';
import Beauty from './pages/Beauty'; 
function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/'>
      <Route index element = {<Home/>}/>
      <Route path='/Man' element={<Man/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Kids' element={<Kids/>}/>
      <Route path='/Leaving' element={<Leaving/>}/>
      <Route path='/Beauty' element={<Beauty/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
