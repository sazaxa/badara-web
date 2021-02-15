import styled from 'styled-components';
import { ResponsiveBlock } from '../styles/CommonStyles';

export const ChargeWrap = styled(ResponsiveBlock)`
    padding-top: 50px;
    position: reletive;
    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transfrom: translate(-50%, -50%);
    }
`;
