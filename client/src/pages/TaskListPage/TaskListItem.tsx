import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS, Task, updateTask } from "src/api";
import { ListItem } from "src/components/ListItem";
import { Form } from "src/components/form";

type HeaderMode = "view" | "edit";

interface Props {
    task: Task;
}

const TaskListItem = ({ task }: Props): JSX.Element => {
    const queryClient = useQueryClient();
    const [mode, setMode] = useState<HeaderMode>("view");

    const updateTaskMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: (updatedItem) => {
            queryClient.setQueryData(QUERY_KEYS.Tasks, (oldData: Task[] = []): Task[] => {
                const index = oldData.findIndex((item) => item.id === updatedItem.id);
                if (index > -1) {
                    return [...oldData.slice(0, index), updatedItem, ...oldData.slice(index + 1)];
                }
                return oldData || [];
            });
            setMode("view");
        },
    });

    const handleEdit = () => {
        setMode("edit");
    };

    const handleCancel = () => {
        setMode("view");
    };

    const handleSubmit = (value: string) => {
        updateTaskMutation.mutate({ id: task.id, title: value });
    };

    const handleRemoval = () => {
        console.warn("unimplemented");
    };

    if (mode === "edit")
        return <Form initialValue={task.title} handleCancel={handleCancel} handleSubmit={handleSubmit} />;

    return <ListItem label={task.title} handleEdit={handleEdit} handleRemoval={handleRemoval} />;
};

export default TaskListItem;
