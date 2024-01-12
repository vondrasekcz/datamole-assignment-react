import axios from "axios";

export type Task = {
    id: number;
    title: string;
    done?: boolean;
};
export type CreateTaskInput = {
    title: string;
};

export type PatchTaskInput = Partial<Omit<Task, "id">> & Pick<Task, "id">;

const buildApiUrl = (path = ""): string => `${import.meta.env.VITE_HTTP_LINK}${path}`;

export const getTasks = (): Promise<Task[]> =>
    axios.get(buildApiUrl("/items?_sort=createdAt&_order=desc")).then((res) => res.data);

export function createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    return axios.post(buildApiUrl("/items"), createTaskInput).then((res) => res.data);
}

export function patchTask({ id, ...patchTaskInput }: PatchTaskInput): Promise<Task> {
    return axios.patch(buildApiUrl(`/items/${id}`), patchTaskInput).then((res) => res.data);
}
