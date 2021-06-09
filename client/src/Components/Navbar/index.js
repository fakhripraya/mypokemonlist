import clsx from 'clsx';
import {
    Nav,
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    DrawerWrapper,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa'
import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import { SidebarData } from '../../Datas/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Navbar = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <DrawerWrapper
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {SidebarData.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                            {(() => {
                                return (
                                    <Fragment>
                                        {item.icon}
                                    </Fragment>
                                )
                            })()}
                        </ListItemIcon>
                        <ListItemText>
                            {(() => {
                                return (
                                    <NavLinks to={item.path}> <span>{item.title}</span></NavLinks>
                                )
                            })()}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </DrawerWrapper>
    );

    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <MobileIcon>
                        <FaBars onClick={toggleDrawer('left', true)} />
                    </MobileIcon>
                    <NavMenu>
                        {SidebarData.map((item, index) => {
                            return (
                                <NavItem>
                                    <NavLinks to={item.path}>
                                        <span style={{ color: '#fff' }}>{item.title}</span>
                                    </NavLinks>
                                </NavItem>
                            );
                        })}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </Fragment>
    )
}

export default Navbar
