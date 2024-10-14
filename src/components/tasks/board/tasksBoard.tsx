import React from "react";
import TasksColumn from "../column/tasksColumn";
import { StyledTasksBoard } from "./tasksBoard.style"
import { DataList } from "../../../data/mock";

const TasksBoard: React.FC<DataList> = ({ dataList }) => {
    return (
        <StyledTasksBoard>
            <TasksColumn title={dataList[0].title} tasks={dataList[0].tasks} />
            <TasksColumn title={dataList[1].title} tasks={dataList[1].tasks} />
            <TasksColumn title={dataList[2].title} tasks={dataList[2].tasks} />
            <TasksColumn title={dataList[3].title} tasks={dataList[3].tasks} />
        </StyledTasksBoard>
    )
}

export default TasksBoard;