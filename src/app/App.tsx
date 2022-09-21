import React, {useState} from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import "./styles/index.scss"
import { Suspense } from 'react';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;