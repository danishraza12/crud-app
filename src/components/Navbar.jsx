import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        background: '#00BFFF'
    },
    links: {
        color: "#ffffff",
        textDecoration: "none",
        marginRight: 25,
        fontSize: 25
    }
})

const Navbar = () => {
    const cssClasses = useStyles();

    return (
        <AppBar className={cssClasses.header} position="static">
            <Toolbar>
                <NavLink className={cssClasses.links} to="/" exact>Get All</NavLink>
                <NavLink className={cssClasses.links} to="add-student" exact>Add Student</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;