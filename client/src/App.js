import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ArtistScreen from "./screens/ArtistScreen";
import UserScreen from "./screens/UserScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/artist/:artistID" exact>
            <ArtistScreen />
          </Route>
          <Route path="/user" exact>
            <UserScreen />
          </Route>
        </Switch>
        <div>
          Links for test, remove later
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/artist/123">Artist with id 123</Link>
          </div>
          <div>
            <Link to="/user">user</Link>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
