import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../../components/Nav";
import HomeContainer from "../Home";
import ArticlesContainer from "../Articles";
import ArticleContainer from "../Article";
import ProjectsContainer from "../Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomeContainer />} exact />
        <Route path="/home" element={<HomeContainer />} exact />
        <Route path="/articles" element={<ArticlesContainer />} exact />
        <Route path="/article/:slug" element={<ArticleContainer />} exact />
        <Route path="/projects" element={<ProjectsContainer />} exact />
      </Routes>
    </div>
  );
}

export default App;