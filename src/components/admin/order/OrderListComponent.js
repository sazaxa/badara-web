import React from 'react';
import { OrderWrap } from 'styles/OrderStyles';
import CancelOrderList from './CancelOrderList';
import NormalOrderList from './NormalOrderList';

const OrderListComponent = ({ Rows, RowsPerPage, Page, HandleChangePage, HandleChangeRowsPerPage, cancalRows }) => {
    return (
        <OrderWrap>
            <NormalOrderList
                Rows={Rows}
                RowsPerPage={RowsPerPage}
                Page={Page}
                HandleChangePage={HandleChangePage}
                HandleChangeRowsPerPage={HandleChangeRowsPerPage}
            />
            <CancelOrderList
                Rows={cancalRows}
                RowsPerPage={RowsPerPage}
                Page={Page}
                HandleChangePage={HandleChangePage}
                HandleChangeRowsPerPage={HandleChangeRowsPerPage}
            />
        </OrderWrap>
    );
};

export default OrderListComponent;
