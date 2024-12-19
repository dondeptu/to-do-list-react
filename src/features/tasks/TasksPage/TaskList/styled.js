import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
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
    color: ${({ theme }) => theme.colors.white};
    border: none;
    width: 30px;
    height: 30px;
    padding: 5px;
    transition: background 0.4s;

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: ${({ theme }) => theme.colors.japaneseLaurel};

        &:hover {
            background-color: ${({ theme }) => theme.colors.japaneseLaurelLight};
        }

        &:active {
            background-color: ${({ theme }) => theme.colors.green};
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: ${({ theme }) => theme.colors.red};

        &:hover {
            background-color: ${({ theme }) => theme.colors.sunsetOrange};
        }

        &:active {
            background-color: ${({ theme }) => theme.colors.vividTangerine};
        }
    `}
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.teal};
    text-decoration: none;
    transition: color 0.4s;

     &:hover {
        color: ${({ theme }) => theme.colors.persianGreen};
    }

    &:active {
        color: ${({ theme }) => theme.colors.bondiBlue};
    }
`;