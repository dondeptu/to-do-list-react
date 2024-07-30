import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    list-style-type: none;
    padding: 0;
`;

export const Items = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border-bottom: 2px solid #ddd;
    padding: 10px;
    gap: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: #fff;
    border: none;
    width: 30px;
    height: 30px;
    padding: 5px;
    transition: background 0.4s;

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: green;

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

        &:active {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: red;

        &:hover {
            background-color: hsl(0, 100%, 65%);
        }

        &:active {
            background-color: hsl(0, 100%, 75%);
        }
    `}
`;