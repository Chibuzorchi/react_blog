// import React from 'react';
import TopBar from './components/topbar/TopBar';
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';
import Login from './components/pages/login/Login';
import Write from './components/pages/write/Write';
import Settings from './components/pages/settings/Settings';
import Single from './components/pages/single/Single';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
   
    <div>
      <TopBar />
       
      <Routes>

      <Route  path="/"
      element={<Home />}>
      { " "}
      </Route>

    <Route Route path="/register"
      element={user? <Home /> : <Register />}>
      { " "}

    </Route>
    <Route Route path="/login"
      element={user? <Home /> : <Login />}>
      { " "}

    </Route>

    <Route Route path="/write"
      element={user? <Write /> : <Register />}>
      { " "}

    </Route>

    <Route Route path="/settings"
      element={user? <Settings /> : <Register />}>
      { " "}

    </Route>
    <Route Route path="/post/:postId"
      element={<Single />}>
      { " "}

    </Route>

    </Routes>
    </div>
  
  );
}

export default App;
