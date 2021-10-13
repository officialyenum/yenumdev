import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AnonymousYellow from "./components/AnonymousYellow";
function App() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
        <Route component={AnonymousYellow} path="/anonymous-yellow" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
