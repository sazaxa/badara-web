import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { OrderWrap } from 'styles/OrderStyles';
import { Link } from 'react-router-dom';
import { columns } from 'containers/admin/order/OrderListContainer';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#2191f3',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const CancelOrderList = ({ Rows, RowsPerPage, Page, HandleChangePage, HandleChangeRowsPerPage }) => {
    const classes = useStyles();
    console.log(Rows);
    return (
        <>
            <h2 style={{ margin: '50px 0 20px 0' }}>취소 주문</h2>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Rows[0].length > 0 ? (
                                Rows[0].slice(Page * RowsPerPage, Page * RowsPerPage + RowsPerPage).map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row" align="center">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="center">
                                                <Link to={`/admin/order/${row.id}`} key={row.id}>
                                                    {row.orderId}
                                                </Link>
                                            </TableCell>
                                            <TableCell align="center">{row.member}</TableCell>
                                            <TableCell align="center">{row.status}</TableCell>
                                            <TableCell align="center">{row.days}</TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan="6" align="center">
                                        접수된 내용이 없습니다.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={Rows[0].length}
                    rowsPerPage={RowsPerPage}
                    page={Page}
                    onChangePage={HandleChangePage}
                    onChangeRowsPerPage={HandleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default CancelOrderList;
