import react from "react";
import { userHistory } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-beetween;
`;

export const NumberContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 20px;
        text-align: center;
        color: #444;
    }

    h2 {
        font-size: 15px;
        text-align: center;
        color: #777;
    }

    &:hover {
        cursor: pointer;
        background-color: lightpink;
        transition: 0.4s ease;
        border-radius: 10px;
    }
`;
