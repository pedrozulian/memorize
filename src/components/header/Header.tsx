import React, { Component } from 'react';
import Logo from './Logo';
import {
    AppBar,
    Toolbar
} from '@material-ui/core';

export default class Header extends Component {
    render() {
        return(
            <AppBar>
                <Toolbar>
                    <Logo />
                </Toolbar>
            </AppBar>
        );
    }
};