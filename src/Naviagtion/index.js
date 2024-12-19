import { Item, List, StyledNavLink } from "../Naviagtion/styled";
import { toAuthor, toTasks } from "../routes";

function Navigation() {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
}

export default Navigation;