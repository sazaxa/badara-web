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
    h2 {
        letter-spacing: -1.5px;
        border-left: 7px solid #0049ff;
        padding-left: 10px;
        box-sizing: border-box;
        margin-bottom: 50px;
        font-size: 26px;
        display: flex;
        align-items: center;
        & > span {
            margin-left: 15px;
        }
    }
    .faqNull {
        font-size: 40px;
        letter-spacing: -2px;
        text-align: center;
        padding: 50px 0;
        box-sizing: border-box;
        color: #ccc;
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
