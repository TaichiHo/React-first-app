/**
 * Created by Taichi1 on 8/6/15.
 */


import React from 'react';
import Router from 'react-router';
import routes from './config/routes';


Router.run(routes, (Root, state)=> {
    React.render(<Root {...state}/>, document.getElementById('app'));
});