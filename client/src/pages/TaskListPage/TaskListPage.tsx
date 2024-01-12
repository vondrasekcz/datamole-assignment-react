import { useQuery } from "react-query";
import { QUERY_KEYS, getTasks } from "src/api";
import { Container } from "src/components/Container";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Layout } from "src/components/Layout";
import TaskList from "./TaskList";
import { useMemo } from "react";

const TaskListPage = (): JSX.Element => {
    const { data, isLoading, isError } = useQuery({
        queryKey: QUERY_KEYS.Tasks,
        queryFn: getTasks,
    });

    const unCheckedTasks = useMemo(() => data?.filter((task) => !task.done), [data]);
    const checkedTasks = useMemo(() => data?.filter((task) => !!task.done), [data]);

    return (
        <Container>
            <Layout>
                <Header handleAddItem={() => console.warn("unimplemented")}>To Do app</Header>
                <TaskList
                    isLoading={isLoading}
                    isError={isError}
                    unCheckedTasks={unCheckedTasks}
                    checkedTasks={checkedTasks}
                />
                <Footer />
            </Layout>
        </Container>
    );
};

export default TaskListPage;
