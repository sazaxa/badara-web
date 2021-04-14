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
    #faqTitle {
        font-size: 24px;
        border-radius: 10px 10px 0 0;
        letter-spacing: -2px;
    }
    #faqContent {
        font-size: 18px;
        border-radius: 0 0 10px 10px;
    }
    .MuiAccordion-root {
        border-radius: 10px;
        margin-bottom: 20px;
    }
`;
