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
    @media screen and (max-width: 1140px) {
        padding: 100%;
    }
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
export const CofirmModalBlock = styled.article`
    width: 450px;
    background: #fff;
    // padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    text-align: center;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:999;
    @media screen and (max-width: 1140px) {
        width:90%;
    }
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
export const BoxWrap = styled.article`
    width: 100%;
    margin-bottom: 30px;
    .titleBox {
        width: 100%;
        border-bottom: 4px solid #0080ff;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left;
        padding-bottom: 15px;
        box-sizing: border-box;
        position: relative;
        @media screen and (max-width: 1140px) {
            justify-content: center;
        }
        & > h2 {
            width: 15%;
            letter-spacing: -2.5px;
            font-size: 32px;
            margin-right: 10px;
            @media screen and (max-width: 1140px) {
                width: 100%;
                text-align: center;
                font-size: 3vw;
                margin-bottom: 5px;
            }
            @media screen and (max-width: 800px) {
                font-size: 3.5vw;
            }
            @media screen and (max-width: 600px) {
                font-size: 6vw;
            }
            @media screen and (max-width: 400px) {
                font-size: 7vw;
            }
        }
        & > p {
            width: 75%;
            text-align: center;
            letter-spacing: -1.5px;
            font-size: 18px;
            & > strong {
                font-size: 22px;
                color: red;
            }
            @media screen and (max-width: 1140px) {
                width: 100%;
                text-align: center;
                margin-bottom: 5px;
                font-size: 14px;
            }
        }
        & > button {
            width: 6%;
            height: 40px;
        }
    }
    input,
    select {
        width: 100%;
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        & > tbody > tr {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: 15px 0;
        }
        & > tbody > tr > th {
            width: 30%;
        }
        & > tbody > tr > td {
            width: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            & > p {
                letter-spacing:-1px;
                font-size:14px;
                color:red;
                margin-top:10px;
                font-weight:600;
            }
        }
        & > tbody > tr > td > input {
            width: 40%;
            @media screen and (max-width: 1140px) {
                width: 80%;
            }
        }
    }
    .weight {
        justify-content: flex-start;
        align-items: center;
    }
    .btn {
        background-color: #0080ff;
        color: #fff;
        &:hover {
            background-color: #0080ff;
            color: #fff;
        }
`;

export const ConfirmWrap = styled.article`
    width: 100%;
    margin-bottom: 30px;
    .titleBox {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 15px;
        box-sizing: border-box;
        & > h2 {
            letter-spacing: -2.5px;
            font-size: 32px;
            margin-right: 10px;
            @media screen and (max-width: 1140px) {
                font-size: 3vw;
            }
            @media screen and (max-width: 800px) {
                font-size: 3.5vw;
            }
            @media screen and (max-width: 600px) {
                font-size: 6vw;
            }
            @media screen and (max-width: 400px) {
                font-size: 7vw;
            }
        }
        & > button {
            height: 40px;
        }
    }
    input,
    select {
        width: 100%;
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
        & > tbody > tr {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: 15px 0;
        }
        & > tbody > tr:first-child {
            border-top: 4px solid #0080ff;
        }
        & > tbody > tr > th {
            width: 50%;
        }
        & > tbody > tr > td {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        & > tbody > tr > td > input {
            width: 100%;
        }
    }
    .total {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        & > h2 {
            width: 100%;
            text-align: center;
            background: #0080ff;
            padding: 20px 0;
            color: #fff;
        }
        & > div {
            width: 50%;
            & > h3 {
                text-align: center;
                padding: 20px 0;
                box-sizing: border-box;
                border-bottom: 1px solid #ccc;
            }
            & > p {
                text-align: center;
                padding: 20px 0;
                box-sizing: border-box;
                border-bottom: 1px solid #ccc;
            }
        }
    }
    .VAT {
        width: 100%;
        text-align: center;
        margin-top: 20px;
        font-weight: 600;
        color: red;
        margin-bottom: 20px;
        @media screen and (max-width: 1140px) {
            font-size: 1.8vw;
        }
        @media screen and (max-width: 800px) {
            font-size: 2vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2.5vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 3vw;
        }
        @media screen and (max-width: 400px) {
            font-size: 3.5vw;
        }
    }
`;

export const ProductWrap = styled.article`
    width: 100%;
    margin-bottom: 30px;
    .titleBox {
        width: 100%;
        border-bottom: 4px solid #0080ff;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left;
        padding-bottom: 15px;
        box-sizing: border-box;
        position: relative;
        @media screen and (max-width: 1140px) {
            justify-content: center;
        }
        & > h2 {
            width: 15%;
            letter-spacing: -2.5px;
            font-size: 32px;
            margin-right: 10px;
            @media screen and (max-width: 1140px) {
                width: 100%;
                text-align: center;
                font-size: 3vw;
                margin-bottom: 5px;
            }
            @media screen and (max-width: 800px) {
                font-size: 3.5vw;
            }
            @media screen and (max-width: 600px) {
                font-size: 6vw;
            }
            @media screen and (max-width: 400px) {
                font-size: 7vw;
            }
        }
        & > p {
            width: 75%;
            text-align: center;
            letter-spacing: -1.5px;
            font-size: 18px;
            & > strong {
                font-size: 22px;
                color: red;
            }
            @media screen and (max-width: 1140px) {
                width: 100%;
                text-align: center;
                margin-bottom: 5px;
                font-size: 16px;
            }
        }
        & > button {
            width: 6%;
            height: 40px;
        }
    }
    input,
    select {
        width: 100%;
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        & > tbody > tr {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: 15px 0;
        }
        & > tbody > tr > th {
            width: 30%;
        }
        & > tbody > tr > td {
            width: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        & > tbody > tr > td > input {
            width: 100%;
        }
    }
`;

export const RecipientWrap = styled.article`
    width: 100%;
    h2 {
        letter-spacing: -2.5px;
        padding-bottom: 15px;
        font-size: 32px;
        border-bottom: 4px solid #0080ff;
        text-align: center;
        @media screen and (max-width: 1140px) {
            font-size: 3vw;
        }
        @media screen and (max-width: 800px) {
            font-size: 3.5vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 6vw;
        }
        @media screen and (max-width: 400px) {
            font-size: 7vw;
        }
    }
    input,
    select {
        width: 100%;
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        & > tbody > tr {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: 15px 0;
        }
        & > tbody > tr > th {
            width: 30%;
        }
        & > tbody > tr > td {
            width: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        & > tbody > tr > td > input {
            width: 100%;
        }
    }
    .agreeBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
    .warning {
        text-align: center;
        margin: 10px 0;
        color: red;
        font-weight: 600;
    }
    .btn {
        background-color: #0080ff;
        color: #fff;
        &:hover {
            background-color: #0080ff;
            color: #fff;
        }
    }
`;
