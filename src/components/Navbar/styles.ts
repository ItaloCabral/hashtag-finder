import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    background: #0a1744;
    backdrop-filter: blur(5px);

    .navbar-button {
        display: flex;
        align-items: center;

        .navbar-btn-about,
        .navbar-btn-login {
            display: flex;
            align-items: center;
            border-radius: 25px;
            border: none;
            padding: 8px 30px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
            letter-spacing: 2px;

            img {
                margin-right: 10px;
                width: 10px;
            }
        }

        .navbar-btn-about {
            background-color: #72efdb;
            color: #0a1744;
            margin-right: 35px;
        }

        .navbar-btn-login {
            background-color: #1e3e7b;
            color: #fff;
        }
    }
`;
