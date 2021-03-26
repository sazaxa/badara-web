import Responsive from '../components/common/Responsive';
import styled from 'styled-components';

export const ApplyWrap = styled(Responsive)`
    padding: 120px 0;
    background: #fff;
    height: 100%;
`;

export const ApplyContent = styled.article`
    width: 1140px;
    box-sizing: border-box;
    margin: 0 auto;
    h2 {
        // margin-bottom: 1rem;
        letter-spacing: -4px;
        border-bottom: 2px solid #666;
        padding: 0 0 1.5rem 0;
        text-align: center;
        font-size: 2rem;
    }
    button {
        background: #343a40;
        cursor:pointer;
        transition:background .3s;
        color:#fff;
        padding:10px;
        border-radius:5px;
    }
    button:hover {
        background:#000;
    }
    button.applyBtn {
        width: 20%;
        height: 50px;
        font-size: 1rem;
        color: #fff;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
        margin-top:50px;
    }
    .ApplyList {
        width:100%;
        height:100%;
    }
    .ApplyListHeader {
        width: 100%;
        height: 50px;
        border-top:2px solid #000;
        border-bottom:1px solid #ccc;
        background: #eee;
        display:flex;
            align-items:center;
        ul {
            width:100%;
            display:flex;
            align-items:center;
            li {
                width:20%;
                text-align:center;
                font-weight:600;
            }
        }
    }
    .ApplyListContent {
        width: 100%;
        height: 150px;
        border-bottom:1px solid #ccc;
        position:relative;
        display:flex;
        align-items:center;
        .delete {
            position:absolute;
            top:50%;
            right:10px;
            transform:translateY(-50%);
        }
        ul {
            width:100%;
            display:flex;
            align-items:center;
            li {
                width:20%;
                text-align:center;
                p {
                    line-height:1.5;
                }
            }
        }
    }
    .ApplyListContent:last-child {
        margin-bottom:50px;
    }
    .waring {
        background: #f2f2f2;
        padding: 1rem;
        letter-spacing: -1px;
        border-bottom: 1px solid #666;
        margin-bottom: 2vw;
        h3 {
            color: red;
            letter-spacing: -2px;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }
        h4 {
            line-height: 1.5;
        }
        p {
            font-size: 0.85rem;
            line-height: 1.5;
            margin-bottom: 0.5rem;
        }
    }
    .contentWrap {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-top: 2px solid #000;
        margin-bottom: 2rem;
        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            align-items: center;
            border-bottom: 1px solid #ccc;
            .title {
                width: 30%;
                height: 50px;
                // height: 100%;
                background: #eee;
                display: flex;
                align-items: center;
                padding: 0 10px;
                box-sizing: border-box;
                font-weight: 600;
            }
            .body {
                width: 70%;
                height: 50px;
                padding: 0 5%;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                input,
                select,
                textarea {
                    width: 100%;
                    height: 40px;
                    outline: 0;
                    border: none;
                    border-bottom: 1px solid #ccc;
                    font-size: 16px;
                    padding: 10px;
                    box-sizing: border-box;
                    resize: none;
                }
            }
            .body.material {
                input {
                    width: 50px;
                    height: 40px;
                }
                button {
                    width: 20%;
                    height: 35px;
                    cursor: pointer;
                    outline: none;
                    border: none;
                    color: #fff;
                    border-radius: 5px;
                }
        }
    }
`;

export const Fullscreen = styled.section`
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AskModalBlock = styled.article`
    width: 320px;
    background: #fff;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    text-align: center;
    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    h3 {
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    p {
        margin-bottom: 1.5rem;
        line-height: 1.5;
        text-align: center;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
        clear: both;
        button {
            padding: 10px;
            // outline: none;
            // border: none;
            // color: #000;
            border-radius: 3px;
            letter-spacing: -1px;
            cursor: pointer;
        }
        // button:first-child {
        //     background: #fff;
        //     border: 1px solid #343a40;
        //     color: #343a40;
        //     &:hover {
        //         background: #343a40;
        //         color: #fff;
        //     }
        }
        button:nth-child(2) {
            margin: 0 0.5rem;
        }
    }
    .shippingWrap {
        padding: 15px;
        box-sizing: border-box;
        height: 100px;
        & > input,
        & > select {
            float: left;
            width: 50%;
            height: 30px;
            border: none;
            outline: none;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
        }
    }
`;
