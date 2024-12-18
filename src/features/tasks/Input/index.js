import styled from "styled-components";

export default styled.input`
    border: 2px solid ${({ theme }) => theme.colors.grey};
    padding: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        min-width: 50%;
    }
`;