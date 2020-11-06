import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListItemIcon, ListItemText, MenuItem, Menu } from '@material-ui/core';
import { ExitToApp, AccountBox, AccountCircle } from '@material-ui/icons';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({anchorEl, menuId, isMenuOpen, handleMenuClose}) {
  

  return (
    <StyledMenu
      id={menuId}
      anchorEl={anchorEl}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <StyledMenuItem>
        <ListItemIcon onClick={handleMenuClose}>
          <AccountCircle fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AccountBox fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="My Account" />
      </StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose} id='signout'>
        <ListItemIcon>
          <ExitToApp fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Sign out" />
      </StyledMenuItem>
    </StyledMenu>
  );
}
