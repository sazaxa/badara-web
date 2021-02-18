import React, { useEffect, useState } from 'react';
import { Responsive } from 'components/index';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListAction } from 'store/order';

const columns = [
    { id: 'id', label: '번호', minWidth: 50, align: 'center' },
    { id: 'days', label: '날짜', minWidth: 200, align: 'center' },
    {
        id: 'member',
        label: '회원',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'status',
        label: '상태',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'country',
        label: '국가',
        minWidth: 170,
        align: 'center',
    },
];

function createData(id, days, member, status, country) {
    return { id, days, member, status, country };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});
const OrderListComponent = () => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.order.orders);
    useEffect(() => {
        dispatch(getOrderListAction());
    }, []);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const rows = [
        // createData('India', 'IN', 1324171354, 3287263),
        list.map(v => createData(v.id, v.product.createdDate, '회원', v.status, v.country)),
    ];
    console.log(rows);
    if (list.length === 0) {
        return null;
    }
    return (
        <Responsive>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows[0].map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row" align="center">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="center">{row.days}</TableCell>
                                        <TableCell align="center">{row.member}</TableCell>
                                        <TableCell align="center">{row.status}</TableCell>
                                        <TableCell align="center">{row.country}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </Responsive>
    );
};

export default OrderListComponent;
