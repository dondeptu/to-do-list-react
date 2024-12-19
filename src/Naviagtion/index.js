import { Item, List, StyledNavLink } from "../Naviagtion/styled";

function Navigation() {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
}

export default Navigation;