import React, { Component, useState } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import { Routes ,Route } from 'react-router-dom';

import "./App.css";
import Navbar from "./component/Navbar";
import NewsBox from "./component/NewsBox";

export default class App extends Component  	 {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<NewsBox key='general' pageSize={5} category={"general"}/>}></Route>
        <Route path="/entertainment" element={<NewsBox key='entertainment' pageSize={5} category={"entertainment"}/>}></Route>
        <Route path="/sports" element={<NewsBox key='entertainment' pageSize={5} category={"sports"}/>}> </Route>
        <Route path="/science" element={<NewsBox key='science' pageSize={5} category={"sceince"}/>}> </Route>
        <Route path="/health" element={<NewsBox key='health' pageSize={5} category={"health"}/>}></Route>
      <Route path="/technology" element={<NewsBox key='technology' pageSize={5} category={"technology"}/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

