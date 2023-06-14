import "./App.css";
import { Route } from "wouter";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </>
  );
}

export default App;
