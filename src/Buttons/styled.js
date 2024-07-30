import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: teal;
    margin-left: 10px;
    transition: color 0.4s;

    @media(max-width: 767px) {
        margin: 10px;
        flex-basis: 100%;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:active {
        color: hsl(180, 100%, 40%);
    }

    ${({ hidden }) => hidden && css`
        visibility: hidden;
    `}

    ${({ disabled }) => disabled && css`
        color: #ccc;
    `}
`;