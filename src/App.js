import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AnonymousYellow from "./pages/AnonymousYellow";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
// import Footer from "./components/Footer";
import AnonymousYellowList from "./pages/AnonymousYellowAdmin";
import NotFound from "./components/NotFound";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <BrowserRouter basename="/">
      <TopBar/>
      {/* <NavBar /> */}
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
        <Route component={AnonymousYellow} path="/anonymous-yellow" />
        <Route
          component={AnonymousYellowList}
          path="/anonymous/dashboard/publish/oreofe"
        />
        <Route component={NotFound} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
