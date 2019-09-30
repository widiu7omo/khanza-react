import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "../drawer/drawer";
import drawerContext,{drawerProvider} from "../drawer/context";
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [toggle,setToggle] = useState(false);
    const [menu,setMenu] = useState('');
    function changeMenu(menuName){
        setMenu(menuName);
    }
    function changeToggle(){
        setToggle(!toggle)
    }
    return (
        <drawerContext.Provider value={{toggle,changeToggle,menu,changeMenu}}>
            <Drawer/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={changeToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography align="left">{menu}</Typography>
                    <Typography align="center" variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Link href="/login">
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </drawerContext.Provider>
    );
}