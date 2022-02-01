import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";

const pages = ['Usluge', 'O nama', 'Arriva Blog', 'Repozitorij', 'Kontakt'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container disableGutters maxWidth="false">
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
        <div class="logo">
        <svg viewBox="0 0 1519.2 297.09" xmlns="http://www.w3.org/2000/svg" style={{width:"175px"}}>
            <defs>
            </defs>
            <g data-name="Layer 2">
            <g data-name="Layer 1">
            <path class="cls-1" d="M30,30H71V0H20A20,20,0,0,0,0,20V69.16H30Z"/>
            <path class="cls-1" d="M262,0H221V30h41V69.16h30V20A20,20,0,0,0,272,0Z"/>
            <path class="cls-1" d="M232,99.16H161V30h30V0H101V30h30V99.16H0V272a20,20,0,0,0,20,20H30V129.16H131V292h30V129.16H262V292h10a20,20,0,0,0,20-20V99.16H232Z"/>
            <path class="cls-1" d="M392,292V280.11c27.59,0,36.92-3.82,42.44-18.67L532.06,0h10.18l97.19,264c5.1,13.58,14.86,16.12,36.93,16.12V292H568.13V280.11c31.41,0,37.77-3.39,37.77-11.88,0-11.88-21.64-61.54-25.46-75.55H474.76c-2.12,7.22-24.19,63.24-24.19,76,0,9.77,9.34,11.46,38.2,11.46V292Zm87.85-113.75h95.5L527.81,47.53Z"/>
            <path class="cls-1" d="M718,121.38c0-12.73-6.79-17-33.53-17V92.52L746.81,90v50.93h.85c9.76-24.62,25-53.48,55.6-53.48,17,0,32.68,10.19,32.68,29.28,0,12.74-8.07,20.8-19.53,20.8s-19.52-6.37-19.52-19.1c0-7.64,3.4-13.58,10.19-17-1.28-1.7-3.82-2.13-6.37-2.13-11,0-36.92,12.74-48,61.54-5.94,26.74-5.94,66.21-5.94,93.8,0,21.22,6.79,25.46,38.2,25.46V292H684V280.11c27.16,0,34-4.24,34-17Z"/>
            <path class="cls-1" d="M883.05,121.38c0-12.73-6.79-17-33.53-17V92.52L911.91,90v50.93h.85c9.76-24.62,25-53.48,55.59-53.48,17,0,32.68,10.19,32.68,29.28,0,12.74-8.06,20.8-19.52,20.8S962,131.14,962,118.41c0-7.64,3.39-13.58,10.18-17-1.27-1.7-3.82-2.13-6.36-2.13-11,0-36.93,12.74-48,61.54-5.94,26.74-5.94,66.21-5.94,93.8,0,21.22,6.79,25.46,38.19,25.46V292h-101V280.11c27.17,0,34-4.24,34-17Z"/>
            <path class="cls-1" d="M1110.53,292H1010.37V280.11c29.71,0,36.5-4.24,36.5-17V121.38c0-12.73-6.79-17-33.53-17V92.52L1075.73,90V263.14c0,12.73,6.79,17,34.8,17ZM1078.28,23.34c0,11.46-8.92,20-20.38,20s-20.37-8.49-20.37-19.95a20.38,20.38,0,1,1,40.75,0Z"/>
            <path class="cls-1" d="M1322.73,92.52v11.89c-23.34,0-27.16,3-36.07,26.31L1223.85,292h-12.31L1147,128.6c-8.49-22.07-12.74-24.19-34-24.19V92.52h92.53v11.89c-28,0-32.26,2.54-32.26,12.3,0,11,23.77,57.3,50.93,135.39h.85c31.41-83.18,49.23-122.23,49.23-134.11,0-10.19-5.09-13.58-31.41-13.58V92.52Z"/>
            <path class="cls-1" d="m1482.7 149.39v112.9c0 12.73 5.09 15.28 11.45 15.28 8.07 0 13.16-7.64 13.16-33.11h11.88c0 28.44-8.06 47.54-34.8 47.54-19.52 0-28.86-12.74-29.71-36.5h-0.84c-11.89 22.92-34 41.59-64.94 41.59-27.59 0-57.3-16.55-57.3-49.66 0-53.9 83.19-68.33 122.24-78.51v-30.14c0-24.19-12.74-39.47-43.3-39.47-17.82 0-36.07 6.37-47.53 15.28l0.85 0.85c8.49 0.43 17.83 6.79 17.83 18.25 0 10.19-7.22 20.8-20 20.8-11.89 0-19.1-8.92-19.1-23.77 0-23.77 28.86-43.29 67.06-43.29 46.73 0 73.05 15.28 73.05 61.96zm-28.86 30.61c-38.63 8.49-90 20.37-90 70.45 0 19.53 17.4 32.26 34.8 32.26 30.13 0 55.18-33.1 55.18-72.15z"/>
            </g>
            </g>
        </svg>
         </div>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"

            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              marginThreshold={0}
              elevation="0"
              PaperProps={{
                style: {
                    backgroundColor: "#050d21",
                     width: "100%",
                     maxWidth: "100%",
                     height: "100vh",
                     marginTop: "10%",
                     padding: "30px",
                   }
                 }}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: "#ac0000",
                
              }}
              disableScrollLock
            >
              {pages.map((page) => (
                <MenuItem key={page} sx={{ justifyContent: "center" }} onClick={handleCloseNavMenu}>
                  <Typography color="#fff" fontSize="2rem" padding="20px">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{justifyContent: 'right', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Link key={page} onClick={handleCloseNavMenu} href={page}>{page}</Link>
             
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
