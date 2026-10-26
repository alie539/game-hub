import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

export const useData = <T>(endPoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
            .then((res) => {
                setLoading(false);
                setData(res.data.results);
            })
            .catch((err: Error) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, [endPoint]);

    return { data, error, isLoading };
};
