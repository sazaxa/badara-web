import React from 'react';
import { useState } from 'react';
import { OrderWrap } from 'styles/OrderStyles';
import CancelOrderList from './CancelOrderList';
import NormalOrderList from './NormalOrderList';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import PandingOrderList from './PandingOrderList';
import DepositOrderList from './DepositOrderList';
import ShippingOrderList from './ShippingOrderList';
import RequestOrderList from './RequestOrderList';
import CompleteOrderList from './CompleteOrderList';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

const OrderListComponent = ({
    Rows,
    RowsPerPage,
    Page,
    HandleChangePage,
    HandleChangeRowsPerPage,
    cancalRows,
    cancelRowsPerPage,
    handleCancelChangePage,
    handleChangeCancelRowsPerPage,
    cancelPage,
    pandingOrderRows,
    depositOrderRows,
    shippingOrderRows,
    requestOrderRows,
    completeOrderRows,
    completePage,
    completeRowsPerPage,
    handleCompleteChangePage,
    handleChangeCompleteRowsPerPage,
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };
    return (
        <OrderWrap>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="결제대기" {...a11yProps(0)} />
                    <Tab label="무통장입금" {...a11yProps(1)} />
                    <Tab label="결제요청" {...a11yProps(2)} />
                    <Tab label="결제완료" {...a11yProps(3)} />
                    <Tab label="해외배송중" {...a11yProps(4)} />
                    <Tab label="해외배송완료" {...a11yProps(5)} />
                    <Tab label="취소" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <PandingOrderList Rows={pandingOrderRows} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <DepositOrderList Rows={depositOrderRows} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <RequestOrderList Rows={requestOrderRows} />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <NormalOrderList
                        Rows={Rows}
                        RowsPerPage={RowsPerPage}
                        Page={Page}
                        HandleChangePage={HandleChangePage}
                        HandleChangeRowsPerPage={HandleChangeRowsPerPage}
                    />
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <ShippingOrderList Rows={shippingOrderRows} />
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <CompleteOrderList
                        Rows={completeOrderRows}
                        RowsPerPage={completeRowsPerPage}
                        Page={completePage}
                        HandleChangePage={handleCompleteChangePage}
                        HandleChangeRowsPerPage={handleChangeCompleteRowsPerPage}
                    />
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <CancelOrderList
                        Rows={cancalRows}
                        RowsPerPage={cancelRowsPerPage}
                        Page={cancelPage}
                        HandleChangePage={handleCancelChangePage}
                        HandleChangeRowsPerPage={handleChangeCancelRowsPerPage}
                    />
                </TabPanel>
            </SwipeableViews>
        </OrderWrap>
    );
};

export default OrderListComponent;
