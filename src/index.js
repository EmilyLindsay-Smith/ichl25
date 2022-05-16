import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Excursions from './components/Excursions'

export default function App() {
return(
<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programme" element={<Programme />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="people" element={<People />} />
        <Route path="info" element={<Info />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="organisers" element={<Organisers />} />
        <Route path="plenary-speakers" element={<PlenarySpeakers />} />
        <Route path="registration-and-fees" element={<Registration />} />
        <Route path="excursions" element={<Excursions />} />
      </Route>
    </Routes>
    </BrowserRouter>
)
}

ReactDOM.render( <App />,   document.getElementById("root")
);