import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Programme from "./components/Programme";
import Workshops from "./components/Workshops";
import Info from "./components/Info";
import People from "./components/People";
import Contact from './components/Contact';
import Accommodation from './components/Accommodation';
import Organisers from './components/Organisers';
import PlenarySpeakers from './components/PlenarySpeakers';
import Registration from './components/Registration';
import Excursions from './components/Excursions';
import Abstract from './components/AbstractsSingle';
import Abstracts from './components/AbstractsAll';
import InfoForPresenters from './components/InfoForPresenters';
import Publishers from './components/Publishers';
import Covid from './components/Covid';

export default function App() {

return(
<BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/programme" element={<Programme />} />
        <Route path= "/workshops" element={<Workshops />} />
        <Route path="/people" element={<People />} />
        <Route path="/info" element={<Info />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/organisers" element={<Organisers />} />
        <Route path="/plenaryspeakers" element={<PlenarySpeakers />} />
        <Route path="/registration-and-fees" element={<Registration />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/presenter-info" element={<InfoForPresenters />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/covid-policy" element={<Covid />} />
        <Route path="/abstracts" element={<Abstracts />}>
          <Route path=":postSlug" element={<Abstract />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
)
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)
//ReactDOM.render( <App />,   document.getElementById("root"));