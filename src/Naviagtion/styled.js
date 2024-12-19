import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.colors.white};
        text-decoration: none;

    &.${activeClassName} {
        font-weight: bold;
    }
`;

export const List = styled.ul`
    list-style: none;
    background: ${({ theme }) => theme.colors.teal};
    margin: 0;
    display: flex;
    justify-content: center;
    padding: 0;
`;

export const Item = styled.li`
    margin: 20px;
`;