import { MypageComponent } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

const MypageContainer = () => {
    const { member } = useSelector(state => state.member.memberInfo);
    return <MypageComponent member={member} />;
};

export default MypageContainer;
