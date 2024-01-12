import ReactQueryProvider from "./components/ReactQueryProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import TaskListPage from "./pages/TaskListPage/TaskListPage";

export const App = (): JSX.Element => (
    <ThemeProvider>
        <ReactQueryProvider>
            <TaskListPage />
        </ReactQueryProvider>
    </ThemeProvider>
);
