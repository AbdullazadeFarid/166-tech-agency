

import './App.css';
import Primarylayout from './layout/primary_layout/primarylayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import Services from './page/services/services';
import Serviceslay from './layout/serviceslayout/serviceslay';
import Navlayout from './layout/nav_layout/navlayout';
import About from './page/about/about';
import Team from './page/team/team';
import Mediaus from './page/mediaus/mediaus';
import { SearchProvider } from './context/context';



function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path='/' element={<Primarylayout />}>
            <Route index element={<Home />} />
            <Route path='services' element={<Serviceslay />}>
              <Route path='' element={<Services />} />
            </Route>
            <Route path='/' element={<Navlayout />}>
              <Route path='/about' element={<About />} />
              <Route path='/team' element={<Team />} />
              <Route path='/media' element={<Mediaus />} />
            </Route>
          </Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
