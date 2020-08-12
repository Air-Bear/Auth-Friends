import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Login from "./components/Login";
import FriendsList from './components/FriendsList';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <PrivateRoute path="/friends" component={FriendsList} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
