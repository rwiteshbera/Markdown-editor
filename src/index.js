import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Markdown/Header";
import Markdown from "./Markdown/Readme";
import Footer from "./Markdown/Footer";
import "./index.css";
import "../node_modules/github-markdown-css/github-markdown.css";

ReactDOM.render(
    <>
    <Header />
    <Markdown/>
    <Footer />
    </>,
    document.getElementById('root')
);