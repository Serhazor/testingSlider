import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Badge, Button } from '@material-ui/core/'
import { Menu as MenuIcon, AccountCircle, Notifications as NotificationsIcon, MoreVert as MoreIcon} from '@material-ui/icons';
import styleMaker from './headersStyleMaker'
import MenuTheme from './menuTheme'
import MobileMenu from './mobileMenu'
import DesktopMenu from './desktopMenu'
import NotificationMenu from './notificationMenu'
import Search from './search'


const useStyles = makeStyles(styleMaker);

export default function PrimarySearchAppBar() {
  
  
  /**
   * @TODO: the user data and headersMetadat should be retrieved through an API call. 
   * Eventually they should be brought to getStaticProps or getServerSideProps async functions
   * for data fecthing. 
   */
  const [userData, setUserData] = React.useState(null);
  const [headersMetadata, setHeadersMetadata] = React.useState(null)
  const [loggedIn, setLoggedIn] = React.useState(Boolean(userData))
  const [clickedLoggedOut, setClickedLoggedOut] = React.useState(null)
  // @TODO - Bring the data fetching to getStaticProps or getServerProps instead of hardcoding them here.
  
  !userData && !clickedLoggedOut ? fetch('/api/users?id=foo')
    .then(res=>res.json())
    .then(res => {
      setUserData(res)
      setLoggedIn(Boolean(res))
    })
    .catch(e=>console.log(e)) : ''
  // @TODO - Delete it once real API is live and adapt code to retrieve information from the API
  
  !headersMetadata ? fetch('/api/loadHeadersMetadata')
    .then(res=>res.json())
    .then(res=> {
      console.log(res)
      setHeadersMetadata(res)
    })
    .catch(e=>console.log(e)) : ''

  
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null)

  
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const isNotificationMenuOpen = Boolean(notificationAnchorEl)

  const handleProfileMenuOpen = e => setAnchorEl(e.currentTarget)

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)
  const handleNotificationMenuClose = () => setNotificationAnchorEl(null)
  const handleMenuClose = e => {
    
    setAnchorEl(null)
    handleMobileMenuClose()
    handleNotificationMenuClose()

    const {currentTarget:{id}} = e
    
    if(id === 'signout'){
      console.log(id)
      setClickedLoggedOut(true)
      setUserData(null)
      setLoggedIn(null)
    }
  };

  const handleMobileMenuOpen = e => setMobileMoreAnchorEl(e.currentTarget)
  const handleNotificationMenuOpen = e => setNotificationAnchorEl(e.currentTarget)


  const notifications = userData ? Array.isArray(userData.notifications) ? userData.notifications : [] :[]
  const notificationNumber = notifications ? notifications.filter(({visited})=>!visited).length:0

  const menuId = 'account-menu';
  const renderMenu = (
    <DesktopMenu 
      anchorEl={anchorEl}
      menuId={menuId}
      isMenuOpen={isMenuOpen}
      handleMenuClose={handleMenuClose}/>
  );

  const mobileMenuId = 'account-menu';
  const renderMobileMenu = (
    <MobileMenu 
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      mobileMenuId={mobileMenuId}
      isMobileMenuOpen={isMobileMenuOpen}
      handleMobileMenuClose={handleMobileMenuClose}
      handleProfileMenuOpen={handleProfileMenuOpen}
      notificationNumber={notificationNumber}
      />
  )
  const notificationMenuId = 'notification-menu'
  const renderNotificationMenu = (<NotificationMenu
      anchorEl={notificationAnchorEl} 
      menuId={notificationMenuId}
      isMenuOpen={isNotificationMenuOpen}
      handleMenuClose={handleNotificationMenuClose}
      userData={userData?userData:''}// Defaults it to an empty string.
      setUserData={setUserData}
    />)

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {headersMetadata?headersMetadata.appName?headersMetadata.appName:'calcompas':'calcompass'}
          </Typography>
          {loggedIn?<Search userData={userData?userData:''} classes={classes} /> :'' }
          <div className={classes.grow} />
          {loggedIn ? (
          <div className={classes.sectionDesktop}>
            <IconButton 
              aria-label={`show ${notificationNumber} new notifications`}
              aria-controls={notificationMenuId}
              aria-haspopup="true"
              variant="contained"
              onClick={handleNotificationMenuOpen}
              color="inherit">
              <Badge badgeContent={notificationNumber} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              variant="contained"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>) :''}
          {loggedIn? (
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>): ''}
          {!loggedIn ? <Button color='inherit' onClick={()=>setClickedLoggedOut(null)}>LOGIN</Button> : ''}
        </Toolbar>
      </AppBar>
      {loggedIn ? 
      <MenuTheme>
        {renderMobileMenu}
        {renderMenu}
        {renderNotificationMenu}
      </MenuTheme>:
      ''}     
    </div>
  );
}
