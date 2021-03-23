import styled from 'styled-components';

export const GuideWrap = styled.section`
    width: 100%;
    padding: 150px 0;
    box-sizing: border-box;
    background: #fff;
`;

export const GuideContents = styled.article`
    width: 1140px;
    margin: 0 auto;
    .GuideContent {
        padding-bottom: 50px;
        box-sizing: border-box;
        margin-bottom: 100px;
        &:last-child {
            margin-bottom: 0;
        }
       h2  {
            margin-bottom: 50px;
            letter-spacing: -1px;
            border-left: 5px solid #0049ff;
            padding-left: 20px;
            display:flex;
            align-items:center;
            & > span {
                margin-left:15px;
                font-size:22px;
            }
        }
        ul {
            width:90%;
            margin: 0 auto;
            position: relative;
            padding: 0 22px 0 0;
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
            li {
                position: relative;
                width: 142px;
                height: 142px;
                margin:0 0 49px 49px;
                font-weight:600;
                border-radius: 50%;
                background:#0049ff;
                font-size: 16px;
                color: #fff;
                text-align: center;
                &:nth-child(2n) {
                    border:1px solid #0049ff;
                    color:#0049ff;
                    background:#fff;
                }
                &:nth-child(1),
                &:nth-child(6) {
                    margin: 0 0 49px 0;
                }
                .num {
                    display: block;
                    padding: 44px 0 17px;
                    font-size: 22px;
                    font-weight: 600;
                }
                .next {
                    position: absolute;
                    top: 62px;
                    right: -30px;
                    width: 9px;
                    height: 15px;
                    font-weight:600;
                    color:#0049ff !important;
                }
                }
            }
        }
    }
`;
