import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Grid} from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
// import styled from "@emotion/styled";
import './index.css'

// const a1 = styled.a`color: black;
//   text-decoration: none`;


const pages = [
  {name: '首页', path: '/'},
  {name: '发布项目', path: '/publish-project'},
  {name: '查看项目', path: '/view-project'},
  {name: '联系我们', path: '/contact-us'},
  {name: '模型库', path: '/models'}];
// const pages = ['1', '2', '3', '4'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Grid container>
              <Grid item xs={3} md={2}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                >
                  City360
                </Typography>
              </Grid>
              <Grid item xs={6} md={7}>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                  {pages.map((page) => (
                      <Button
                          key={page}
                          onClick={handleCloseNavMenu}
                          sx={{my: 2, color: 'white', display: 'block'}}
                      >
                        <Link to={page.path}>
                          {page.name}
                        </Link>
                      </Button>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default ResponsiveAppBar;
