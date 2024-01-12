import { Task } from "src/api";
import { ListItem } from "src/components/ListItem";

interface Props {
    task: Task;
}

const TaskListItem = ({ task }: Props): JSX.Element => {
    const handleEdit = () => {
        console.warn("unimplemented");
    };

    const handleRemoval = () => {
        console.warn("unimplemented");
    };

    return <ListItem label={task.title} handleEdit={handleEdit} handleRemoval={handleRemoval} />;
};

export default TaskListItem;
