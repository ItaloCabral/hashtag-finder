import styled from "styled-components";

import backgroundHero from "../../assets/img/hero-bg.jpg";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    background-image: linear-gradient(to bottom, transparent 0%, #0a1744 95%),
        url(${backgroundHero});
    background-repeat: no-repeat;
    background-position: 0 -30%;

    .container-home {
        width: 1600px;
        padding-top: 150px;

        .hero {
            .title {
                max-width: 900px;
                margin-bottom: 200px;

                h1 {
                    font-size: 85px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }

                p {
                    max-width: 500px;
                    font-size: 25px;
                }
            }

            .search {
                display: flex;
                justify-content: center;
                margin-bottom: 120px;

                form img {
                    width: 25px;
                }

                form img.search-img {
                    margin-left: 40px;
                }

                form {
                    width: 70%;
                    text-align: center;
                    border-radius: 50px;
                    background-color: #1e3e7b;
                    display: flex;

                    input {
                        margin-left: 15px;
                        font-size: 45px;
                        padding: 20px 20px;
                        color: #fff;
                        border: none;
                        width: 80%;
                        background-color: #1e3e7b;
                    }
                }

                form input::placeholder {
                    color: #8d9da2;
                }
            }
        }

        .content {
            h2 {
                text-align: center;
                font-size: 20px;
                margin-bottom: 20px;
            }

            .content-twitter {
                display: flex;
                justify-content: center;

                .content-twitter-images {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-self: flex-start;

                    .twitter-image {
                        flex-basis: 40%;
                        flex-grow: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: end;
                        border-radius: 15px;
                        margin-right: 40px;
                        margin-bottom: 40px;
                        width: 180px;
                        height: 300px;

                        .twitter-image-info {
                            position: relative;
                            padding: 20px;
                            border-radius: 0 0 15px 15px;

                            background: linear-gradient(
                                to bottom,
                                transparent 0%,
                                #000 95%
                            );
                        }
                    }
                }

                .content-twitter-tweets {
                    display: flex;
                    flex-direction: column;
                    width: 70%;

                    .twitter-tweet {
                        display: flex;
                        align-items: start;
                        background-color: #0c1b49;
                        border: 1px solid #ffffff24;
                        border-radius: 10px;
                        padding: 20px 30px;
                        margin-bottom: 15px;

                        img {
                            border-radius: 50px;
                            width: 50px;
                            height: 50px;
                            margin-right: 20px;
                        }

                        .tweet-head {
                            display: flex;
                            align-items: center;
                            margin-bottom: 5px;

                            p {
                                margin-right: 10px;
                                font-weight: bold;
                                font-size: 18px;
                            }

                            span {
                                font-size: 14px;
                                opacity: 0.43;
                            }
                        }

                        .tweet {
                            margin-bottom: 25px;
                            font-size: 14px;
                        }

                        a {
                            color: #72efdb;
                            font-size: 14px;
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
`;
