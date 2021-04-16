import styled from 'styled-components';

export const GuideWrap = styled.section`
    width: 100%;
    padding: 150px 0;
    box-sizing: border-box;
    background: #fff;
    @media screen and (max-width: 1140px) {
        padding: 80px 0 0 0;
    }
`;

export const GuideContents = styled.article`
    width: 1140px;
    margin: 0 auto;
    @media screen and (max-width: 1140px) {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
    .GuideContent {
        padding-bottom: 50px;
        box-sizing: border-box;
        margin-bottom: 100px;
        @media screen and (max-width:1140px) {
            padding:0;
        }
        & > div > img {
            width: 100px;
        }
        &:last-child {
            margin-bottom: 0;
        }
        p {
            font-size:18px;
            letter-spacing:-1.5px;
            line-height:1.5;
            @media screen and (max-width:1140px) {
                text-align:center;
            }
            @media screen and (max-width: 620px) {
                font-size:15px;
             }
        }
        .GuideHeader {
            margin-bottom: 50px;
            font-weight: 600;
            letter-spacing: -1px;
            border-left: 5px solid #0049ff;
            padding-left: 20px;
            display: flex;
            flex-wrap:wrap;
            align-items: center;
            & > span {
                margin-left: 15px;
                font-size: 22px;
                @media screen and (max-width: 1140px) {
                    margin-left: 0;
                    width: 100%;
                    display:block;
                    text-align:center;
                    margin-top:10px;
                }
            }
                @media screen and (max-width: 1140px) {
                    border-left: 0;
                    justify-content: center;
                    padding-left: 0;
                }
            }
            ul {
                width: 90%;
                margin: 0 auto;
                position: relative;
                padding: 0 22px 0 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                @media screen and (max-width: 1140px) {
                    padding:0;
                }
                li {
                    position: relative;
                    width: 142px;
                    height: 142px;
                    margin: 0 0 49px 49px;
                    font-weight: 600;
                    border-radius: 50%;
                    background: #0049ff;
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                    white-space:pre-line;
                    @media screen and (max-width: 1140px) {
                       width:15vw;
                       height:15vw;
                    }
                    @media screen and (max-width: 920px) {
                        width:20vw;
                        height:20vw;
                     }
                     @media screen and (max-width: 620px) {
                        width:17vw;
                        height:17vw;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        font-size:14px;
                     }
                     
                    &:nth-child(2n) {
                        border: 1px solid #0049ff;
                        color: #0049ff;
                        background: #fff;
                    }
                    &:nth-child(1),
                    &:nth-child(6) {
                        margin: 0 0 49px 0;
                    }
                    &:nth-child(5) {
                        @media screen and (max-width: 1140px) {
                            margin: 0 0 49px 0;
                         }
                         @media screen and (max-width: 920px) {
                            margin: 0 0 49px 49px;
                         }
                    }
                    &:nth-child(3n) {
                        @media screen and (max-width: 1140px) {
                            margin: 0 0 49px 49px;
                            .next {
                                // display:none;
                            }
                         }
                    }
                    &:nth-child(5) {
                        .next {
                            display:none;
                            @media screen and (max-width: 1140px) {
                                display:block;
                             }
                        }
                    }
                    &:nth-child(4),
                    &:nth-child(7),
                    &:nth-child(10) {
                        @media screen and (max-width: 920px) {
                            margin: 0 0 49px 0;
                         }
                    }
                    .num {
                        display: block;
                        padding: 44px 0 17px;
                        font-size: 22px;
                        font-weight: 600;
                        @media screen and (max-width: 1140px) {
                            padding: 4vw 0 2vw;
                         }
                         @media screen and (max-width: 920px) {
                            padding: 6vw 0 2vw;
                         }
                         @media screen and (max-width: 620px) {
                            display:none;
                         }
                    }
                    .next {
                        position: absolute;
                        top: 50%;
                        transform:translateY(-50%);
                        right: -30px;
                        width: 9px;
                        height: 15px;
                        font-weight: 600;
                        color: #0049ff !important;

                    }
                }
            }
        }
    }
`;
