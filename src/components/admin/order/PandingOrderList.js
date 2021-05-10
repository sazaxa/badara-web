import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { columns } from 'containers/admin/order/OrderListContainer';
import moment from 'moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { printOrderNumberListAction } from 'store/order';

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
        padding: '0',
    },
    container: {
        // maxHeight: 440,
    },
});

const PandingOrderList = ({ Rows, history }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selected, setSelected] = useState([]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleOnseleted = (e, order) => {
        const selectedIndex = selected.indexOf(order);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, order);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };
    const handleSelectAllClick = e => {
        console.log(e.target.checked);
        if (e.target.checked) {
            const newSelecteds = Rows.map(n => n);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };
    const isSelected = order => selected.indexOf(order) !== -1;

    const handlePrint = () => {
        if (selected.length <= 0) {
            alert('선택해주세요.');
        } else {
            dispatch(printOrderNumberListAction({ selectedOrders: selected }));
            history.push('/admin/print');
        }
    };

    return (
        <>
            <div className="btnWrap" style={{ marginBottom: '10px' }}>
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#2191f3', color: '#fff', marginRight: '10px' }}
                    onClick={() => handlePrint()}
                >
                    프린트
                </Button>
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#2191f3', color: '#fff', marginRight: '10px' }}
                    onClick={() => alert('준비중입니다.')}
                >
                    엑셀 다운로드
                </Button>
            </div>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Checkbox
                                        onChange={e => handleSelectAllClick(e)}
                                        checked={selected.length > 0 && selected.length === Rows.length}
                                    />
                                </StyledTableCell>
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
                            {Rows.length > 0 ? (
                                Rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row" align="center">
                                                <Checkbox
                                                    onChange={e => handleOnseleted(e, row)}
                                                    checked={isSelected(row)}
                                                />
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="center">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="center">
                                                <Link to={`/admin/order/${row.id}`} key={row.id}>
                                                    {row.orderNumber}
                                                </Link>
                                            </TableCell>
                                            <TableCell align="center">{row.recipient.member.email}</TableCell>
                                            <TableCell align="center">{row.orderStatus}</TableCell>
                                            <TableCell align="center">
                                                {moment(row.recipient.createdDate).format('LLLL')}
                                            </TableCell>
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
                    count={Rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default withRouter(PandingOrderList);
