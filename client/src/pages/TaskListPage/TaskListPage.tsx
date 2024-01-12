import { useQuery } from "react-query";
import { QUERY_KEYS, getTasks } from "src/api";
import { Container } from "src/components/Container";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Layout } from "src/components/Layout";
import TaskList from "./TaskList";

const TaskListPage = (): JSX.Element => {
    const { data, isLoading, isError } = useQuery({
        queryKey: QUERY_KEYS.Tasks,
        queryFn: getTasks,
    });

    return (
        <Container>
            <Layout>
                <Header handleAddItem={() => console.warn("unimplemented")}>To Do app</Header>
                <TaskList isLoading={isLoading} isError={isError} tasks={data} />
                <Footer />
            </Layout>
        </Container>
    );
};

export default TaskListPage;
