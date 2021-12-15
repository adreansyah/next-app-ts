import { FC, useState } from 'react';
import { Grow, Paper, Typography } from '@mui/material';
import { Clear, Logout } from '@mui/icons-material';
import { UTILITIESHEADERS } from './structure';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Headers: FC<UTILITIESHEADERS> = ({ openBarFunc }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [fadeCount, setFadeCount] = useState<number>(0)
    const [clickAble, setClickAble] = useState<boolean>(true)
    const handleMenu = (event: { currentTarget: any }) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose: any = () => {
        setAnchorEl(null);
    };
    const onClickAble = () => {
        setClickAble(!clickAble)
        openBarFunc()
        setFadeCount(500)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative" style={{ background: '#fff' }}>
                <Toolbar className="headers-between">
                    {clickAble && <Grow
                        in={clickAble}
                        {...(clickAble ? { timeout: fadeCount } : {})}
                    >
                        <Paper elevation={5} sx={{ boxShadow: 0 }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="default"
                                aria-label="menu"
                                onClick={onClickAble}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </Paper>
                    </Grow>}
                    {!clickAble && <Grow
                        in={!clickAble && true}
                        {...(!clickAble ? { timeout: fadeCount } : {})}
                    >
                        <Paper elevation={5} sx={{ boxShadow: 0 }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="default"
                                aria-label="menu"
                                onClick={onClickAble}
                            >
                                <Clear fontSize="large" />
                            </IconButton>
                        </Paper>
                    </Grow>}
                    <Menu
                        PaperProps={{
                            style: {
                                width: 250,
                            },
                        }}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <IconButton
                                size="medium"
                                aria-label="show 4 new mails"
                                color="default"
                                sx={{ mr: 1 }}
                            >
                                <Logout />
                                <Typography
                                    pl={1}
                                    fontSize={14}
                                    variant="subtitle1"
                                    noWrap
                                    component="span"
                                    sx={{ display: { xs: 'none', sm: 'block' } }}
                                >
                                    Sign Out
                                </Typography>
                            </IconButton>
                        </MenuItem>
                    </Menu>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, paddingRight: 1 }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="default"
                            sx={{ mr: 0 }}
                        >
                            <Badge className="pulses" badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="default"
                            sx={{ mr: 1 }}
                        >
                            <Badge className="pulses" badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, borderLeft: " 1px solid #757575" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="default"
                        >
                            <AccountCircle />
                            <Typography
                                pl={1}
                                fontSize={14}
                                variant="subtitle1"
                                noWrap
                                component="span"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Adreansyah Aswafi
                            </Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Headers