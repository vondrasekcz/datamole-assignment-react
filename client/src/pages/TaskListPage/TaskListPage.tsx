import { useQuery } from "react-query";
import { QUERY_KEYS, getTasks } from "src/api";
import { Container } from "src/components/Container";
import { Footer } from "src/components/Footer";
import { Layout } from "src/components/Layout";
import TaskList from "./TaskList";
import { useMemo } from "react";
import styled from "styled-components";
import TaskHeader from "./TaskHeader";

const StyledDiv = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
`;

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
                <TaskHeader />
                <StyledDiv>
                    <TaskList
                        isLoading={isLoading}
                        isError={isError}
                        unCheckedTasks={unCheckedTasks}
                        checkedTasks={checkedTasks}
                    />
                </StyledDiv>
                <Footer todoItems={unCheckedTasks?.length} doneItems={checkedTasks?.length} />
            </Layout>
        </Container>
    );
};

export default TaskListPage;
