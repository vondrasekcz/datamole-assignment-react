import { useState } from "react";
import { Header } from "src/components/Header";
import { Form } from "src/components/form";

type HeaderMode = "view" | "edit";

const TaskHeader = () => {
    const [mode, setMode] = useState<HeaderMode>("view");

    const handleEdit = () => {
        setMode("edit");
    };

    const handleCancel = () => {
        setMode("view");
    };

    const handleSubmit = () => {
        // TODO
    };

    if (mode === "edit") return <Form initialValue="" handleCancel={handleCancel} handleSubmit={handleSubmit} />;

    return <Header handleAddItem={handleEdit}>To Do app</Header>;
};

export default TaskHeader;
