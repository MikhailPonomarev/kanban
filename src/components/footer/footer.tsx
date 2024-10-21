import { useState } from "react";
import { ColumnTitle } from "../../model/columnTitle";
import { getTasksByColumnTitle } from "../../util/localStorage";
import { FooterText, StyledFooter, TasksCounter } from "./footer.style";

const Footer = () => {
    // const [activeCount, setActiveCount] = useState<number>(
    //     getTasksByColumnTitle(ColumnTitle.BACKLOG).length
    // );
    // const [finishedCount, setFinishedCount] = useState<number>(
    //     getTasksByColumnTitle(ColumnTitle.FINISHED).length
    // );

    return (
        <StyledFooter>
            <TasksCounter>
                <FooterText>Active tasks: {1}</FooterText>
                <FooterText>Finished tasks: {1}</FooterText>
            </TasksCounter>
            <FooterText>Kanban board by Elizaveta Ponomareva, 2024</FooterText>
        </StyledFooter>
    );
}

export default Footer;