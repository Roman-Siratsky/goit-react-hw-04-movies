import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import {Typography, CssBaseline, AppBar, Toolbar} from '@material-ui/core';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';



class Header extends Component {

    render() {
        return(<>
            <CssBaseline/>
            <header className="header">
                <AppBar position='relative'>
                    <Toolbar>
                        <TheatersRoundedIcon/>
                        <nav className='container'>
                            <NavLink className='link' exact to='/'><Typography variant='h6'>Home</Typography></NavLink>
                            <NavLink className='link'  to='/movies'><Typography variant='h6'>Movies</Typography></NavLink>
                        </nav>
                    </Toolbar>
                </AppBar>
            </header>
            </>
        )
    }
}
export default Header;