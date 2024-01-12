import { Task } from "src/api";
import { List } from "src/components/List";
import TaskListItem from "./TaskListItem";

interface Props {
    isLoading: boolean;
    isError: boolean;
    tasks?: Task[];
}

const TaskList = ({ isLoading, isError, tasks }: Props): JSX.Element => {
    if (isLoading) return <div>Loading...</div>;
    if (isError || !tasks) return <div>Error</div>;

    return (
        <List>
            {tasks.map((task) => (
                <TaskListItem key={task.id} task={task} />
            ))}
        </List>
    );
};

export default TaskList;
