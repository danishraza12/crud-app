import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        background: '#191970'
    },
    button: {
        background: '#191970',
        marginRight: 25,
        fontSize: 25,
        color: '#FFFFFF',
        border: 'none',
        cursor: 'pointer',
    }
})

const Navbar = () => {
    const cssClasses = useStyles();

    return (
        <AppBar position="static" className={cssClasses.header}>
            <Toolbar>
                <Link to="/">
                    <button className={cssClasses.button}>Get All</button>
                </Link>
                <Link to="/add">
                    <button className={cssClasses.button}>Add Student</button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;