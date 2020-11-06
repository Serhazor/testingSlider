import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ListItemIcon, ListItemText, MenuItem, Menu} from '@material-ui/core';
import { Done, Notifications } from '@material-ui/icons';
import { green, red } from '@material-ui/core/colors'


const useStyles = makeStyles({
    visited:{
        color: green[700]
    },
    notVisited:{
        color: red[700]
    }
})


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  }
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

export default function notificationMenus({anchorEl, menuId, handleMenuClose, userData, setUserData}) {

    const classes = useStyles()

    const visitNotification = notificationId =>{
        const changedUserData = {...userData}

        if(changedUserData.notifications){
            changedUserData.notifications.forEach(notification=>{
                if(notification.id === notificationId){
                    notification.visited = true
                }
            })
        }
        setUserData(changedUserData)
        
    }

    // Menu Click Handler
    const handleMenuClick = id =>{
      visitNotification(id) // Change state of notification to visited
      // Close menu
      handleMenuClose()
    }

    // Assuming that the userData has an attribute notification and it is an array of objects
    const { notifications } = userData

    // Turn notifications into JSX components
    const jsxChildrenComponents = Array
        .isArray(notifications) ? 
            notifications
                .map(({ id, title, visited })=>(
                    <StyledMenuItem key={id} onClick={e=>handleMenuClick(id)}>
                        <ListItemIcon>
                            {visited?<Done fontSize="small" /> : <Notifications />}
                        </ListItemIcon>
                        <ListItemText primary={title} className={visited?classes.visited:classes.notVisited}/>
                    </StyledMenuItem>)):
            ''

  return (
    <StyledMenu
    id={menuId}
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleMenuClose}
    >
        {jsxChildrenComponents}
    </StyledMenu>
  )
}
