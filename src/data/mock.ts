export interface TaskData {
    id: number;
    name: string;
    description: string;
}

export interface Data {
    title: 'Backlog' | 'Ready' | 'In Progress' | 'Finished';
    tasks: TaskData[];
}

export interface DataList {
    dataList: Data[];
}

export const dataMock: DataList = {
    dataList: [
        {
            title: 'Backlog',
            tasks: [
                {
                    id: 1,
                    name: 'Login page – performance issues',
                    description: 'Fix all the bugs',
                },
            ],
        },
        {
            title: 'Ready',
            tasks: [
                {
                    id: 2,
                    name: 'Shop page – performance issues',
                    description: 'Fix all the bugs',
                },
            ],
        },
        {
            title: 'In Progress',
            tasks: [
                {
                    id: 3,
                    name: 'User page – performance issues',
                    description: 'Fix all the bugs',
                },
            ],
        },
        {
            title: 'Finished',
            tasks: [
                {
                    id: 4,
                    name: 'Main page – performance issues',
                    description: 'Fix all the bugs',
                },
            ],
        },
    ],
};
