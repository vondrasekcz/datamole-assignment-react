import axios from "axios";

export type Task = {
    id: number;
    title: string;
    done?: boolean;
};

const buildApiUrl = (path = ""): string => `${import.meta.env.VITE_HTTP_LINK}${path}`;

export const getTasks = (): Promise<Task[]> =>
    axios.get(buildApiUrl("/items?_sort=createdAt&_order=desc")).then((res) => res.data);
