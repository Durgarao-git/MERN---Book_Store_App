import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import {NavLink} from 'react-router-dom';


const Header = () => {
    const [value, setValue] = useState();

    return (
        <div>
            <AppBar position='sticky'>
                <Toolbar>
                    <NavLink to="/" style={{color:"white"}}>
                    <Typography  >
                        <LocalLibraryIcon />
                        
                    </Typography>
                    </NavLink>
                    <Tabs  sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)} >
                        <Tab LinkComponent={NavLink} to="/add" label='ADD PRODUCT' />
                        <Tab LinkComponent={NavLink} to="/books" label='BOOKS' />
                        <Tab LinkComponent={NavLink} to="/about" label='ABOUT US' />
                    </Tabs>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header


