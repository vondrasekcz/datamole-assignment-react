import ReactQueryProvider from "./components/ReactQueryProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import TodoListPage from "./pages/TodoListPage/TodoListPage";

export const App: React.FC = () => (
    <ThemeProvider>
        <ReactQueryProvider>
            <TodoListPage />
        </ReactQueryProvider>
    </ThemeProvider>
);
