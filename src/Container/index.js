import "./style.css";
import { Wrapper } from "./styled";

const Container = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Container;