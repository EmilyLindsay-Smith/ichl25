import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Abstracts() {
  return (
    <div className="container container-pad max-view">
    <h1 id="site-top">Abstract</h1>
    <Outlet />
    </div>
  )

}