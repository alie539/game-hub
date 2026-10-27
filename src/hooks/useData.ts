import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

export const useData = <T>(
    endPoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: unknown[],
) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(
        () => {
            console.log(
                "🔥 useData FETCHING:",
                endPoint,
                requestConfig?.params,
                "deps:",
                deps,
            );
            const controller = new AbortController();

            apiClient
                .get<FetchResponse<T>>(endPoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then((res) => {
                    console.log(
                        "✅ Got data:",
                        res.data.results.length,
                        "games",
                    );
                    setLoading(false);
                    setData(res.data.results);
                })
                .catch((err: Error) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });

            return () => controller.abort();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps ? [...deps] : [],
    );

    return { data, error, isLoading };
};
