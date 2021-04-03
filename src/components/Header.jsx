import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import {Typography, CssBaseline, AppBar, Toolbar} from '@material-ui/core';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';
import routes from '../routes'


class Header extends Component {

    render() {
        return(<>
            <CssBaseline/>
            <header className="header">
                <AppBar position='relative'>
                    <Toolbar>
                        <TheatersRoundedIcon/>
                        <nav className='container'>
                            <NavLink className='link' exact to={routes.gh + routes.home}><Typography variant='h6'>Home</Typography></NavLink>
                            <NavLink className='link' to={routes.gh + routes.movies}><Typography variant='h6'>Movies</Typography></NavLink>
                        </nav>
                    </Toolbar>
                </AppBar>
            </header>
            </>
        )
    }
}
export default Header;