import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

export const Button = styled.button`
    background-color: teal;
    color: #fff;
    border: none;
    padding: 10px;
    transition: 0.5s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.2);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;

export const NewTask = styled.input`
    border: 2px solid #ddd;
    padding: 10px;

    @media(max-width: 767px) {
        min-width: 50%;
    }
`;