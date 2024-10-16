// import * as React from 'react'; 
// import PropTypes from 'prop-types'; 
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase'; 
// import styled from '@emotion/styled';
// import { alpha } from '@mui/material';


// const drawerWidth = 240;

// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [isClosing, setIsClosing] = React.useState(false);

//   const handleDrawerClose =()=>{ 
//     setIsClosing (true) ; 
//     setMobileOpen (false ); 
//   }; 



// const handleDrawerTransitionEnd =()=>{     
//     setIsClosing (false );}; 


    
//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen);
//     }
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   // Remove this const when copying and pasting into your project.
//   const container = window !== undefined ? () => window().document.body : undefined;
  
//   const Search = styled ('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
    
    
    
//     backgroundColor :alpha (theme.palette.common.white, 0.15),
//     '&:hover':{ 
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   })); 
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           > 
//             <MenuIcon /> 
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onTransitionEnd={handleDrawerTransitionEnd}
//           onClose={handleDrawerClose}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         <Typography sx={{ marginBottom: 2 }}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography sx={{ marginBottom: 2 }}>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

// export default ResponsiveDrawer ; 

// import React, { useState } from 'react';


// import { styled } from '@mui/material/styles';
// import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, InputBase } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';   


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft:   

//  `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// function   
//  App() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   return   
//  (
//     <Box sx={{ display: 'flex' }}>
//       <AppBar   
//  position="fixed" color="inherit">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, display: { md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             My App
//           </Typography>
//           <StyledInputBase
//             placeholder="Search…"
//             inputProps={{ 'aria-label': 'search' }}
//             sx={{ display: { md: 'flex' } }}
//           />
//           <IconButton type="submit" sx={{ p: '10px' }}>
//             <SearchIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="persistent"
//         anchor="left"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ display: { md: 'none' } }}
//       >
//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               {/* Your icon here */}
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItem>
//           {/* Add more list items as needed */}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ p: 3, width: '100%', flexGrow: 1 }}>
//         {/* Your main content here */}
//       </Box>
//     </Box>
//   );
// }

// export default App ; 







// import * as React from 'react';
// import { alpha, styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Badge, InputBase } from '@mui/material'; 
// import SearchIcon from "@mui/material/SearchIcon"; 

// import MoreIcon from "@mui/material/MoreIcon"; 

// import { AccountCircle } from '@mui/icons-material';
// import NotificationsIcon from "@mui/material/Notifications" 
// const drawerWidth = 240; 

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     variants: [
//       {
//         props: ({ open }) => open,
//         style: {
//           ...openedMixin(theme),
//           '& .MuiDrawer-paper': openedMixin(theme),
//         },
//       },
//       {
//         props: ({ open }) => !open,
//         style: {
//           ...closedMixin(theme),
//           '& .MuiDrawer-paper': closedMixin(theme),
//         },
//       },
//     ],
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   }; 

//   const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
  
  
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled (InputBase )(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },})); 
  
  
  
//     const menuId ='primary-search-account-menu';const mobileMenuId ='primary-search-account-menu-mobile'; 
//     const handleMobileMenuOpen =(event )=>{setMobileMoreAnchorEl (event.currentTarget );}; 
    
    
    
    
    
    
    
//     const [mobileMoreAnchorEl ,setMobileMoreAnchorEl ]=React.useState (null ); 
//     const [anchorEl ,setAnchorEl ]=React.useState (null ); 
//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
      
    
    
    
    
    
    
//     };return ( 
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open ={open }> 
//       <AppBar position="static"> 
//         <Toolbar > 
          
          
//           <Search > 
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             /> 
//           </Search > 
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            
//             <IconButton
              
              
//               size ="large"aria-label ="show 17 new notifications"
//               color ="inherit" 
            
            
//             ><Badge badgeContent ={17} color ="error"variant ="dot"> 

//                 <NotificationsIcon />
//               </Badge > 
//             </IconButton > 
//             <IconButton 
//               size ="large" 
//               aria-label ="show 4 new mails" 
//               color ="inherit" 
//             > 
              
              
              
//               <Badge badgeContent ={4} color="error"variant ="dot"> 
//                 <MailIcon /> 
//               </Badge>
//             </IconButton > 
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
          
//           </Box ></Toolbar > 
      
      
      
//       </AppBar >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={[
//               {
//                 marginRight: 5,
//               },
//               open && { display: 'none' },
//             ]}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={[
//                   {
//                     minHeight: 48,
//                     px: 2.5,
//                   },
//                   open
//                     ? {
//                         justifyContent: 'initial',
//                       }
//                     : {
//                         justifyContent: 'center',
//                       },
//                 ]}
//               >
//                 <ListItemIcon
//                   sx={[
//                     {
//                       minWidth: 0,
//                       justifyContent: 'center',
//                     },
//                     open
//                       ? {
//                           mr: 3,
//                         }
//                       : {
//                           mr: 'auto',
//                         },
//                   ]}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   sx={[
//                     open
//                       ? {
//                           opacity: 1,
//                         }
//                       : {
//                           opacity: 0,
//                         },
//                   ]}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={[
//                   {
//                     minHeight: 48,
//                     px: 2.5,
//                   },
//                   open
//                     ? {
//                         justifyContent: 'initial',
//                       }
//                     : {
//                         justifyContent: 'center',
//                       },
//                 ]}
//               >
//                 <ListItemIcon
//                   sx={[
//                     {
//                       minWidth: 0,
//                       justifyContent: 'center',
//                     },
//                     open
//                       ? {
//                           mr: 3,
//                         }
//                       : {
//                           mr: 'auto',
//                         },
//                   ]}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={text}
//                   sx={[
//                     open
//                       ? {
//                           opacity: 1,
//                         }
//                       : {
//                           opacity: 0,
//                         },
//                   ]}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography sx={{ marginBottom: 2 }}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography sx={{ marginBottom: 2 }}>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box > 
//     </Box >//   );// } 


import * as React from 'react'; 
import PropTypes from 'prop-types'; 
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';




import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';




import { AppProvider } from '@toolpad/core/AppProvider'; 
import {DashboardLayout }from '@toolpad/core/DashboardLayout';import Table from "./table" 
import Grid from "@mui/material/Grid"; 



import Card from '@mui/material/Card';import Attendance from "./attendance"; 
import { AppBar, Avatar, Badge, Drawer, InputBase, List, ListItem, ListItemText, Stack, Toolbar } from '@mui/material'; 
import MailIcon from '@mui/icons-material/Mail';import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; 

import ChaletOutlinedIcon from '@mui/icons-material/ChaletOutlined';import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'; 
import styled from '@emotion/styled';import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search'; 
// import MailIcon from '@mui/icons-material/Mail'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import ListItemIcon from "@mui/material/ListItemIcon"; 

const NAVIGATION =[   
  { 
    kind: 'header',
    // title: 'Main items',
  }, 
  {
    segment: 'dashboard', 
    title: 'Home', 
    icon: <ChaletOutlinedIcon />, 
  }, 
  {
    segment: 'orders',
    title: 'My Space',
    icon: <LeaderboardOutlinedIcon />,
  }, 
]; 

const demoTheme = createTheme ({ 
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints :{ 
    values :{ 
      xs :0, 
      sm: 600, 
      md: 600, 
      lg: 1200, 
      xl: 1536, 
    }, 
  }, 
}); 

function DemoPageContent ({pathname }){  
  return ( 
    
    <Box 
      sx ={{
        py: 4,
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
      }}><Attendance /><Table />{/* <Typography variant ="button">My Space /</Typography ><Typography >Attendance </Typography >  */} 
      
      
      
      
      
      
      </Box >);} 


DemoPageContent.propTypes ={ 
  pathname: PropTypes.string.isRequired , 
}; 

function Search (){ 
  
  const StyledInputBase = styled (InputBase )(({ theme }) => ({
    color: 'inherit', 
    '& .MuiInputBase-input':{ 
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft:   
   `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  })); 

  const Appbar =()=>{  const [drawerOpen ,setDrawerOpen ]=React.useState (false ); 
  const handleDrawerOpen =()=>{setDrawerOpen (true );}; 

  
  
  
  const handleDrawerClose =()=>{ 
    setDrawerOpen(false);
  }; 
return (<Box sx ={{ display: 'flex' }}> 

  <AppBar   
position="fixed" color="inherit">
    <Toolbar > 
      
      
      
      
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        My App
      </Typography>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={{ display: { md: 'flex' } }}
      />
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={17} color="error">   

          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <AccountCircle   
/>
      </IconButton>
    </Toolbar>
  </AppBar>
  <Drawer 
    variant="persistent"
    anchor="left"
    open ={drawerOpen } 
    onClose={handleDrawerClose}
    sx={{ display: { md: 'none' } }}
  > 
    <List > 
      <ListItem button>
        <ListItemIcon>
          {/* Your icon here */}
        
        
        
        
        
        </ListItemIcon > 
        <ListItemText primary="Home" />
      </ListItem>
      {/* Add more list items as needed */}
    </List>
  </Drawer>
  <Box component="main" sx={{ p: 3, width: '100%', flexGrow: 1 }}>
    {/* Your main content here */}
  </Box>
</Box>

)} 
  
  return ( 
    <Grid container justifyContent ="center" alignItems =""> 
      <Tooltip title="Search" enterDelay ={1000}> 
        
        
        
        
        
        <Stack direction ="row"> 
          <IconButton
            type="button"
            
            
            
            
            
            
            aria-label="search"
            sx ={{ 
              display: { xs: 'inline', md: 'none' },
            }} 
          > 
            
            <SearchIcon /> 
          </IconButton > 
        
        </Stack ></Tooltip > 
      
      
      
      <Grid container direction ="row"spacing sx ={{justifyContent: "center",}}><Stack direction ="row"spacing ={2}><TextField 
label ="Search" 

        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          }, 
        }} 
        sx ={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
        fullWidth 
      
      /><Badge color="secondary" badgeContent ={1}> 
      <MailIcon /> 
    </Badge ><Badge color="secondary" badgeContent ={1}> 
      <NotificationsNoneIcon /> 
      
      {/* <MailIcon />  */}</Badge ><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Stack ></Grid >  
    
    </Grid >); 

} 

function DashboardLayoutSlots (props ){ 
  const {window }=props ; 

  const [pathname ,setPathname ]=React.useState ('/dashboard'); 

  const router = React.useMemo(() => {
    return {
      pathname , 
      searchParams :new URLSearchParams (), 
      navigate: (path ) => setPathname(String(path)),
    }; 
  }, [pathname ]); 

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return ( 
    <AppProvider 
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout slots={{ toolbarActions: Search }}>
        <DemoPageContent pathname ={pathname }/> 
      </DashboardLayout > 
    </AppProvider > 
  ); 
} 

DashboardLayoutSlots.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project . 
   */
  window :PropTypes.func , 
}; 

export default DashboardLayoutSlots ; 