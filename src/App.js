import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Components/signup";
import Login from "./Components/login";
import Home from "./Components/home";
import Elections from "./Components/elections";
import Front from "./Components/front";
import Post from "./Components/post";
import Contact from "./Components/contact";
import Badli from "./Components/delhi/badli";
import Dwarka from "./Components/delhi/dwarka";
import Kalkaji from "./Components/delhi/kalkaji";
import Laxmi from "./Components/delhi/laxmi";
import Narela from "./Components/delhi/narela";
import Vishvas from "./Components/delhi/vishwas";
import About from "./Components/about";
function App() {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/post" component={Post}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/elections/delhi/badli" component={Badli}></Route>
      <Route path="/elections/delhi/dwarka" component={Dwarka}></Route>
      <Route path="/elections/delhi/kalkaji" component={Kalkaji}></Route>
      <Route path="/elections/delhi/laxmi" component={Laxmi}></Route>
      <Route path="/elections/delhi/narela" component={Narela}></Route>
      <Route path="/elections/delhi/vishwas" component={Vishvas}></Route>
      <Route path="/elections" component={Elections}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/" component={Front}></Route>
    </Switch>
  );
}

export default App;
