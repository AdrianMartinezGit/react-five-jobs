import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePageComponent from './Components/HomePageComponent';
import NavbarComponent from './Components/NavbarComponent';
import NvidiaPageComponent from './Components/NvidiaPageComponent';
import AMDPageComponent from './Components/AMDPageComponent';
import DiscordPageComponent from './Components/DiscordPageComponent';
import ValvePageComponent from './Components/ValvePageComponent';
import VulkanPageComponent from './Components/VulkanPageComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePageComponent />} />
        <Route path='/Nvidia' element={<NvidiaPageComponent />} />
        <Route path='/AMD' element={<AMDPageComponent />} />
        <Route path='/Discord' element={<DiscordPageComponent />} />
        <Route path='/Valve' element={<ValvePageComponent />} />
        <Route path='/Vulkan' element={<VulkanPageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
