import React from "react";
import {Route, Routes} from 'react-router-dom';

import { AuthRoutes, publicRoutes } from '../routs'

const AppRouter = () => {
        const isAuth = false
      return (
       <Routes>
        {isAuth && AuthRoutes.map(({path, Component}) => 
                <Route key={path} path = {path} component = {Component} exact/>
        )}
        {publicRoutes.map(({path, Component}) => 
                <Route key={path} path = {path} component = {Component} exact/>
        )}
       </Routes>
      )
};

export default AppRouter;