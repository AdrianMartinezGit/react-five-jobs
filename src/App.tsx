import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePageComponent from './Components/HomePageComponent';
import NavbarComponent from './Components/NavbarComponent';
import JobOnePageComponent from './Components/JobOnePageComponent';
import JobTwoPageComponent from './Components/JobTwoPageComponent';
import JobThreePageComponent from './Components/JobThreePageComponent';
import JobFourPageComponent from './Components/JobFourPageComponent';
import JobFivePageComponent from './Components/JobFivePageComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='/jobone' element={<JobOnePageComponent/>}/>
        <Route path='/jobtwo' element={<JobTwoPageComponent/>}/>
        <Route path='/jobthree' element={<JobThreePageComponent/>}/>
        <Route path='/jobfour' element={<JobFourPageComponent/>}/>
        <Route path='/jobfive' element={<JobFivePageComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
