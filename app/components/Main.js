/**
 * Created by Taichi1 on 8/6/15.
 */
import React from 'react';
import {RouteHandler} from 'react-router';
import SearchGithub from'./SearchGithub.js';

class Main extends React.Component {
    render() {
        "use strict";
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <SearchGithub />
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler {...this.props}/>
                </div>
            </div>
        )
    }
}

module.exports = Main;