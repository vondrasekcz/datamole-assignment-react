import { ReactNode } from "react";
import { QueryClient, QueryClientProvider as QueryClientProviderRQ } from "react-query";

const queryClient = new QueryClient();

interface Props {
    children: ReactNode;
}

export const ReactQueryProvider = ({ children }: Props): JSX.Element => {
    return <QueryClientProviderRQ client={queryClient}>{children}</QueryClientProviderRQ>;
};

export default ReactQueryProvider;
