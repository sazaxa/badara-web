import styled from 'styled-components';
import { ResponsiveBlock } from '../styles/CommonStyles';

export const ChargeWrap = styled(ResponsiveBlock)`
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        h2 {
            text-align: center;
            font-size: 18px;
            margin-bottom: 15px;
        }
        & + div {
            margin-left: 50px;
        }
    }
`;
