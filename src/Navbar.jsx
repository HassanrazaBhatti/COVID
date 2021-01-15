// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
// }));

// export default function DenseAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import "./App.css";
let Navbars =() =>{
    return(
  <Navbar  expand="lg" fixed="top" bg="light">
  <Navbar.Brand href="#home" className="navbar-brand">ReactHub</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto navbar">
      <Nav.Link href="#home" className="nav-link active">Home</Nav.Link>
      <Nav.Link href="#link" className="nav-link">About</Nav.Link>
      <Nav.Link href="#home" className="nav-link">Services</Nav.Link>
      <Nav.Link href="#link" className="nav-link">Portfolio</Nav.Link>
      <Nav.Link href="#link" className="nav-link">Pages</Nav.Link>
      <Nav.Link href="#link" className="nav-link">Contact</Nav.Link>
    </Nav> 
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navbars;