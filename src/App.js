import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContactPage from './pages/ContactPage/ContactPage';
import DataPage from './pages/DataPage/DataPage';
import MainPage from './pages/MainPage/MainPage';
import Photo from './pages/Photo/Photo';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/photo' element={<Photo/>}/>
        <Route path='/data' element={<DataPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
