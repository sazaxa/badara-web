import React from 'react';
import { useSelector } from 'react-redux';
import { Responsive } from 'styles/CommonStyles';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MypageContent } from 'styles/MypageStyles';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#1976d2',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles(theme => ({
    root: {
        width: '80px',
        height: '80px',
        fontSize: '24px',
        margin: '0 auto',
        marginBottom: '50px',
    },
    table: {
        minWidth: 650,
    },
}));

function createData(name, calories, fat, carbs, protein, status) {
    return { name, calories, fat, carbs, protein, status };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 2),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2),
    createData('Eclair', 262, 16.0, 24, 6.0, 3),
    createData('Cupcake', 305, 3.7, 67, 4.3, 30),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 300),
];

const MypageComponent = ({ member }) => {
    const classes = useStyles();
    if (!member) {
        return null;
    }
    return (
        <Responsive>
            <MypageContent>
                {/* <Button variant="contained" color="primary">
                    내정보 수정
                </Button> */}
                <article className="mypageHeader">
                    <article className="left">
                        MY <br />
                        고래타고
                    </article>
                    <article className="right">
                        <ul>
                            <li>
                                <strong>송장입력</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>센터입고중</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>결제요청</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>결제완료</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>해외배송중</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>해외배송완료</strong>
                                <p>0</p>
                            </li>
                        </ul>
                    </article>
                </article>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>신청일자</StyledTableCell>
                                <StyledTableCell align="right">품목명</StyledTableCell>
                                <StyledTableCell align="right">주소</StyledTableCell>
                                <StyledTableCell align="right">금액</StyledTableCell>
                                <StyledTableCell align="right">무게(회원/측정)</StyledTableCell>
                                <StyledTableCell align="right">상태</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </MypageContent>
        </Responsive>
    );
};

export default MypageComponent;
