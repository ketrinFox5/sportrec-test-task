import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '../../../node_modules/@mui/material/index';
import RussianFlagSvg from '../Icons/RussianFlagSvg';
import HomeSvg from '../Icons/HomeSvg';
import MarketSvg from '../Icons/MarketSvg';
import RaitingSvg from '../Icons/RaitingSvg';
import CompetitionsSvg from '../Icons/CompetitionsSvg';
import OrganizationsSvg from '../Icons/OrganizationsSvg';
import LiveSvg from '../Icons/LiveSvg';
import ArrowDownSvg from '../Icons/ArrowDownSvg';
import NotificationsSvg from '../Icons/NotificationsSvg';
import LogoSvg from '../Icons/LogoSvg';
import * as React from 'react';

// interface IPage {
//     text: string,
//     icon: string
// }

const Header = () => {

    const pages = [
        {text: 'Лента', icon: <HomeSvg/>},
        {text: 'Маркетплейс', icon: <MarketSvg/>},
        {text: 'Рейтинги', icon: <RaitingSvg/>},
        {text: 'Cоревнования', icon: <CompetitionsSvg/>},
        {text:'Организации', icon: <OrganizationsSvg/>},
        {text: 'Live', icon: <LiveSvg/>}
    ];
    // const settings = ['Профиль', 'Выйти'];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
    return (
        <AppBar position="static" color="default">
          <Container sx={{padding: ' 14px 0', maxWidth: '1160px', }}>
            <Toolbar>
              <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                  <LogoSvg />
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'Inter', marginLeft: '30px', marginRight: '48px' }}>
                    {pages.map((page) => (
                      <Box>
                        <Link href={page.text} underline="none" color="#9395B8" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'}}>
                          {page.icon}
                          <Typography component="div" style={{marginLeft: '10px', textTransform: 'none', fontSize: '14px'}}>
                            {page.text}
                          </Typography>
                        </Link>
                      </Box>
                    ))}
                </Box>
              <Button color="inherit" sx={{fontSize: '14px'}}>
                <RussianFlagSvg/>
                <Typography sx={{margin: '0 4px', fontSize: '14px'}}>
                  RU
                </Typography>
                <ArrowDownSvg/>
              </Button>
              <IconButton color="inherit" sx={{margin: '0 16px 0 24px'}}>
                <Badge variant="dot" color="error">
                  <NotificationsSvg />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <Avatar alt="User Name" src="src/assets/avatar.svg"  sx={{ width: 36, height: 36, marginRight: '8px', bgcolor: '#06082C' }}/>
                <ArrowDownSvg/>
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
                <MenuItem onClick={handleMenuClose}>Выйти</MenuItem>
              </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;