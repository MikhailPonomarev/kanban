import { FooterText, StyledFooter, TasksCounter } from "./footer.style";

const Footer = () => {
    return (
        <StyledFooter>
            <TasksCounter>
                <FooterText>Active tasks: N</FooterText>
                <FooterText>Finished tasks: M</FooterText>
            </TasksCounter>
            <FooterText>Kanban board by Elizaveta Ponomareva, 2024</FooterText>
        </StyledFooter>
    );
}

export default Footer;