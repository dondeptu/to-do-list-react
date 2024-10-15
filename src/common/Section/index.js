import { Container, Header, Title, Wrapper } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Container>
            {body}
        </Container>
    </Wrapper>
);

export default Section;