import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Mycart from "./Mycart";

function App() {
  return (
    <div className="App">
      {/*header */}

      <BrowserRouter>
        <Header />
        {/*  product information */}
        <Switch>
          <Route path="/Mycart" component={Mycart} />

          <Route path="/" component={Home} />
        </Switch>

        {/* footer information */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
