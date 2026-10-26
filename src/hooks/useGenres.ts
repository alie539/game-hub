import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

export const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGenreResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setLoading(false);
                setGenre(res.data.results);
            })
            .catch((err: Error) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
};
