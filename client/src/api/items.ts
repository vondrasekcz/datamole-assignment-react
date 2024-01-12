import axios from "axios";

export type Item = {
    id: number;
    title: string;
    done?: boolean;
};

const buildApiUrl = (path = ""): string => `${import.meta.env.VITE_HTTP_LINK}${path}`;

export const getItems = (): Promise<Item[]> => axios.get(buildApiUrl("/items")).then((res) => res.data);
