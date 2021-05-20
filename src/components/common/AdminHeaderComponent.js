import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AdminHeaderContent } from 'styles/CommonStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Collapse from '@material-ui/core/Collapse';
import PublishIcon from '@material-ui/icons/Publish';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const AdminHeaderComponent = ({ location, handleLogout }) => {
    const { pathname } = location;
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <AdminHeaderContent>
            <article className="logo">
                <h2>SHIPMENT 관리자</h2>
            </article>
            <article className="menuList">
                {/* <ul>
                    <li className={pathname === '/admin/user' || pathname === '/admin' ? 'active' : null}>
                        <Link to="/admin/user">회원목록</Link>
                    </li>
                    <li className={pathname === '/admin/order' ? 'active' : null}>
                        <Link to="/admin/order">주문목록</Link>
                    </li>
                    <li className={pathname === '/admin/faq' ? 'active' : null}>
                        <Link to="/admin/faq">FAQ</Link>
                    </li>
                    <li className={pathname === '/admin/insert' ? 'active' : null}>
                        <Link to="/admin/insert">엑셀 등록</Link>
                    </li>
                </ul> */}
                <List>
                    <Link to="/admin/user">
                        <ListItem button style={{ color: '#000' }}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="회원 목록" />
                        </ListItem>
                    </Link>
                    <Link to="/admin/order">
                        <ListItem button style={{ color: '#000' }}>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="주문 목록" />
                        </ListItem>
                    </Link>
                    <Link to="/admin/faq">
                        <ListItem button style={{ color: '#000' }}>
                            <ListItemIcon>
                                <LiveHelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="자주하는 질문" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to="/admin/insert">
                                <ListItem button style={{ color: '#000' }} className={classes.nested}>
                                    <ListItemIcon>
                                        <PublishIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="엑셀 등록" />
                                </ListItem>
                            </Link>
                        </List>
                        <List component="div" disablePadding>
                            <Link to="/admin/pointsetting">
                                <ListItem button style={{ color: '#000' }} className={classes.nested}>
                                    <ListItemIcon>
                                        <ControlPointIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="포인트" />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                </List>
                <button type="button" onClick={handleLogout}>
                    로그아웃
                </button>
            </article>
        </AdminHeaderContent>
    );
};
export default withRouter(AdminHeaderComponent);
