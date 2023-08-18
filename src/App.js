
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Bollywood from "./Component/Bollywood/Bollywood";
import SingleBlog from './Component/Articles/SingleBlog';
import SingleBollywood from './Component/Bollywood/SingleBollywood';
import Empty from './Component/EmptyContent/Empty';

function App() {
  return (
   <>
     <Header />
     
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/bollywood' element={<Bollywood />}/>
    <Route path='/bollywood/:passBollywoodCard' element={<SingleBollywood />}/>
    <Route path='/:passPara' element={<SingleBlog />}/>
    <Route path='/techonology' element={<Empty />}/>
    <Route path='/hollywood' element={<Empty />}/>
    <Route path='/fitness' element={<Empty />}/>
    <Route path='/food' element={<Empty />}/>
    
  </Routes>
   </>

  );
}

export default App;
