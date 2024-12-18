import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 10px;
    transition: 0.5s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.persianGreen};
        transform: scale(1.2);
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.bondiBlue};
    }
`;