import React from 'react';
import { Routes, Route, Link, useLocation,Outlet } from "react-router-dom";

import '../App.css';

export default function GuestLayout() {
  return (
    <div>
       <div className="">
        
          <Outlet />
        </div>
    </div>
  )
}
