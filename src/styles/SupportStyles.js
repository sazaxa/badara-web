import styled from 'styled-components';

export const SupportWrap = styled.section`
    width: 100%;
    padding: 150px 0;
    box-sizing: border-box;
    background: #fff;
`;
export const SupportContents = styled.article`
    width: 1140px;
    margin: 0 auto;
    padding-bottom: 200px;
    @media screen and (max-width: 1140px) {
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .supportHeader {
        margin-bottom: 50px;
        font-weight: 600;
        letter-spacing: -1px;
        border-left: 5px solid #0049ff;
        padding-left: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        & > img {
            width: 100px;
        }
        & > span {
            margin-left: 15px;
            font-size: 22px;
            @media screen and (max-width: 1140px) {
                margin-left: 0;
                width: 100%;
                display: block;
                text-align: center;
                margin-top: 10px;
            }
        }
        @media screen and (max-width: 1140px) {
            border-left: 0;
            justify-content: center;
            padding-left: 0;
        }
    }
    .faqNull {
        font-size: 40px;
        letter-spacing: -2px;
        text-align: center;
        padding: 50px 0;
        box-sizing: border-box;
        color: #ccc;
        @media screen and (max-width: 1140px) {
            font-size: 24px;
        }
    }
    .faq {
        width: 100%;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-wrap: wrap;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.5px;
        padding: 16px 0;
        color: #333;
        & > span {
            color: #0049ff;
            font-weight: 600;
            margin-right: 15px;
        }
    }
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        flex-wrap: wrap;
        border-bottom: 1px solid #ccc;
        h3 {
            font-size: 24px;
            letter-spacing: -1.5px;
            @media screen and (max-width: 1140px) {
                width: 100%;
                font-size: 17px;
            }
        }
        a {
            color: #fff;
            border-radius: 5px;
            font-size: 14px;
            letter-spacing: -1px;
            background: #0049ff;
            padding: 10px;
            @media screen and (max-width: 1140px) {
                font-size: 13px;
                padding: 6px;
            }
        }
    }
    .content {
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
        p {
            width: 100%;
            letter-spacing: -1px;
            line-height: 1.5;
            img {
                display: block;
                width: 50%;
                margin: 0 auto;
                @media screen and (max-width: 1140px) {
                    width: 100%;
                }
            }
        }
    }
`;
