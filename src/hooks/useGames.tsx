import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setLoading(false);
                setGames(res.data.results);
            })
            .catch((err: Error) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { games, error, isLoading };
};
