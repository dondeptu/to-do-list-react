import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.teal};
    margin-left: 10px;
    transition: color 0.4s;

    @media(max-width: 767px) {
        margin: 10px;
        flex-basis: 100%;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.persianGreen};
    }

    &:active {
        color: ${({ theme }) => theme.colors.bondiBlue};
    }

    ${({ hidden }) => hidden && css`
        visibility: hidden;
    `}

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.colors.grey};
    `}
`;