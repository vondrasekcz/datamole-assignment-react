import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS, Task, patchTask } from "src/api";
import { ListItem } from "src/components/ListItem";
import { Form } from "src/components/form";

type HeaderMode = "view" | "edit";

interface Props {
    task: Task;
}

const TaskListItem = ({ task }: Props): JSX.Element => {
    const queryClient = useQueryClient();
    const [mode, setMode] = useState<HeaderMode>("view");

    const patchTaskMutation = useMutation({
        mutationFn: patchTask,
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
        patchTaskMutation.mutate({ id: task.id, title: value });
    };

    const handleRemoval = () => {
        console.warn("unimplemented");
    };

    const handleChangeCheckbox = (isChecked: CheckedState) => {
        patchTaskMutation.mutate({ id: task.id, done: !!isChecked });
    };

    if (mode === "edit")
        return <Form initialValue={task.title} handleCancel={handleCancel} handleSubmit={handleSubmit} />;

    return (
        <ListItem
            checked={!!task.done}
            onCheckedChange={handleChangeCheckbox}
            label={task.title}
            handleEdit={handleEdit}
            handleRemoval={handleRemoval}
        />
    );
};

export default TaskListItem;
