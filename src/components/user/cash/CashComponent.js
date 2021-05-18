import React from 'react';
import { CashPageContent } from 'styles/CashPageStyles';
import { Responsive } from 'styles/CommonStyles';
import moment from 'moment';

const CashComponent = ({ user, history }) => {
    if (!user || !history) return null;
    return (
        <Responsive>
            <CashPageContent>
                <div className="head">
                    <h4>
                        {user.name}({user.email})님의 보유 바다라 CASH
                    </h4>
                    <h2>{user.point ? user.point : 0} CASH</h2>
                </div>
                <div className="body">
                    <div className="title">
                        <h3>사용/적립 내역</h3>
                    </div>
                    <div class="history">
                        {history.length === 0 ? (
                            <p className="historyNone">사용/적립 내역이 없습니다.</p>
                        ) : (
                            history.map(item => (
                                <div className="item">
                                    <div className="left">
                                        <span>{item.section}</span>
                                        <span>{item.detail}</span>
                                        <p>{moment(item.createdDate).format('l')}</p>
                                    </div>
                                    <div className="right">
                                        {/* {!item.withdraw ? '적립' + item.deposit : '사용' + item.withdraw} */}
                                        <span style={!item.withdraw ? { color: '#1976d2' } : { color: 'red' }}>
                                            {!item.withdraw ? '적립' : '사용'}
                                        </span>
                                        <span className="point">{!item.withdraw ? item.deposit : item.withdraw}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </CashPageContent>
        </Responsive>
    );
};

export default CashComponent;
