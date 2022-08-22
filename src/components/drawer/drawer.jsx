import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: 65,
    // borderRight: '1px solid white',
    boxShadow:'2px 2px 2px #e0e0e0;',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 65,
    borderRight: '1px solid white',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
       width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        margin: 0,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function DrawerOne(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const selectOption = (noteOption) => {
        props.listenToDrawer(noteOption)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={props.drawerToggle}>
                <List>
                    <ListItem button onClick={() => selectOption('Notes')} sx={{ display: 'flex', flexDirection: "row", justifyContent:'space-between',
                        "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" }}}>
                        <ListItemIcon sx={{  }}>
                            <LightbulbOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Notes' />
                    </ListItem>
                    <ListItem button onClick={() => selectOption('Reminders')} sx={{ display: 'flex',flexDirection: "row", justifyContent:'space-between',
                        "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" } }}>
                        <ListItemIcon>
                            <NotificationsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Reminders' sx={{ fontSize: '35px' }}/>
                    </ListItem>
                    <ListItem button onClick={() => selectOption('Edit')} sx={{ display: 'flex', flexDirection: "row", justifyContent:'space-between',
                        "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" } }}>
                        <ListItemIcon>
                            <EditOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Edit labels' />
                    </ListItem>
                    <ListItem button onClick={() => selectOption('Archive')} sx={{ display: 'flex', flexDirection: "row", justifyContent:'space-between',
                        "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" }}}>
                        <ListItemIcon>
                            <ArchiveOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Archive' />
                    </ListItem>
                    <ListItem button onClick={() => selectOption('Trash')} sx={{ display: 'flex', flexDirection: "row", justifyContent:'space-between',
                        "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" }}}>
                        <ListItemIcon>
                            <DeleteOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Trash' />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}
