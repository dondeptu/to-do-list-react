import styled, { css } from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.teal};
    margin-left: 10px;
    transition: color 0.4s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 10px;
        flex-basis: 100%;
    }

    &:hover:enabled {
        color: ${({ theme }) => theme.colors.persianGreen};
    }

    &:active:enabled {
        color: ${({ theme }) => theme.colors.bondiBlue};
    }

    ${({ hidden }) => hidden && css`
        visibility: hidden;
    `}

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.colors.grey};
    `}
`;