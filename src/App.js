import React from "react";
import Pagination from "./Pagination";
import NpmPagination from "./NpmPagination";
import Navbar from "./Navbar";
import {BrowserRouter, Switch, Route}  from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/">
         <Pagination />
        </Route>
        <Route exact path="/npm">
        <NpmPagination />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
