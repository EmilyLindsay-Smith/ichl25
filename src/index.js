import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Programme from "./components/Programme";
import Workshops from "./components/Workshops";
import Info from "./components/Info";
import People from "./components/People"

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
      </Route>
    </Routes>
    </BrowserRouter>
)
}

ReactDOM.render( <App />,   document.getElementById("root")
);