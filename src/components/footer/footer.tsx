import { FooterText, StyledFooter, TasksCounter } from './footer.style';
import { useGlobal } from '../../context/globalContext';

const Footer = () => {
    const { backlogTasks, finishedTasks } = useGlobal();

    return (
        <StyledFooter>
            <TasksCounter>
                <FooterText>Active tasks: {backlogTasks.length}</FooterText>
                <FooterText>Finished tasks: {finishedTasks.length}</FooterText>
            </TasksCounter>
            <FooterText>Kanban board by Elizaveta Ponomareva, 2024</FooterText>
        </StyledFooter>
    );
}

export default Footer;