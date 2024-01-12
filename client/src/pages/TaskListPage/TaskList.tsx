import { Task } from "src/api";
import { List } from "src/components/List";
import TaskListItem from "./TaskListItem";

interface Props {
    isLoading: boolean;
    isError: boolean;
    unCheckedTasks?: Task[];
    checkedTasks?: Task[];
}

const TaskList = ({ isLoading, isError, checkedTasks, unCheckedTasks }: Props): JSX.Element => {
    if (isLoading) return <div>Loading...</div>;
    if (isError || !checkedTasks || !unCheckedTasks) return <div>Upsss... </div>;
    if (checkedTasks.length + unCheckedTasks.length === 0) return <div>No tasks</div>;

    return (
        <List>
            {unCheckedTasks.map((task) => (
                <TaskListItem key={task.id} task={task} />
            ))}
            {checkedTasks.map((task) => (
                <TaskListItem key={task.id} task={task} />
            ))}
        </List>
    );
};

export default TaskList;
