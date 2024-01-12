import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS, Task, createTask } from "src/api";
import { Header } from "src/components/Header";
import { Form } from "src/components/form";

type HeaderMode = "view" | "edit";

const TaskHeader = () => {
    const queryClient = useQueryClient();
    const [mode, setMode] = useState<HeaderMode>("view");

    const createTaskMutation = useMutation({
        mutationFn: createTask,
        onSuccess: (newItem) => {
            queryClient.setQueryData(QUERY_KEYS.Tasks, (oldData?: Task[]): Task[] => [newItem, ...(oldData || [])]);
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
        createTaskMutation.mutate({ title: value });
    };

    if (mode === "edit") return <Form initialValue="" handleCancel={handleCancel} handleSubmit={handleSubmit} />;

    return <Header handleAddItem={handleEdit}>To Do app</Header>;
};

export default TaskHeader;
