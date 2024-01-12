import { useQuery } from "react-query";
import { QUERY_KEYS, getItems } from "src/api";
import { Container } from "src/components/Container";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Layout } from "src/components/Layout";

const TodoListPage = (): JSX.Element => {
    const { data, isLoading, isError } = useQuery({
        queryKey: QUERY_KEYS.ITEMS,
        queryFn: getItems,
    });

    return (
        <Container>
            <Layout>
                <Header handleAddItem={() => console.warn("unimplemented")}>To Do app</Header>
                <pre>{JSON.stringify(data, null, 2)}</pre>
                <Footer />
            </Layout>
        </Container>
    );
};

export default TodoListPage;
