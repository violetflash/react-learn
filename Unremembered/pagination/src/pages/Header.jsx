import React from 'react';
import { AppBar, Toolbar, List, ListItem, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { PAGES } from '../utils/constants';

export const Header = props => {
  const { pathname } = useLocation();

  const navLinks = PAGES.map(page => {
    const active = pathname === page.route
    return (
      <ListItem
        key={page.id}
        sx={{marginX: '12px', borderRadius: '4px', backgroundColor: active ? 'white' : 'inherit'}}
      >
        <Link to={page.route}>{page.title}</Link>
      </ListItem>
    );
  })

  return (
    <AppBar
      sx={{background: 'lightcyan'}}
      position='static'
    >
      <Container
        maxWidth='xl'
      >
        <Toolbar >
          <List sx={{display: 'flex', marginX: 'auto'}}>
            {navLinks}
          </List>
        </Toolbar>
      </Container>

    </AppBar>
  )
};