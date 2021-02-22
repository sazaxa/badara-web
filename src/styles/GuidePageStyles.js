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
        border-bottom: 1px solid #bebebe;
        padding-bottom: 50px;
        box-sizing: border-box;
        margin-bottom: 100px;
        &:last-child {
            margin-bottom: 0;
        }
        h2 {
            margin-bottom: 50px;
            letter-spacing: -1px;
            border-left: 5px solid #000;
            padding-left: 20px;
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
                border: 1px solid #3c3c3c;
                border-radius: 50%;
                font-size: 16px;
                color: #3c3c3c;
                text-align: center;
                &:nth-child(1),
                &:nth-child(6) {
                    margin: 0 0 49px 0;
                }
                .num {
                    display: block;
                    padding: 44px 0 17px;
                    font-size: 20px;
                    font-weight: 600;
                }
                .next {
                    position: absolute;
                    top: 62px;
                    right: -30px;
                    width: 9px;
                    height: 15px;
                    font-weight:600;
                }
                }
            }
        }
    }
`;
