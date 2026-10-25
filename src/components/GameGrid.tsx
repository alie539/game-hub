import { Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";

export const GameGrid = () => {
    const { error, games } = useGames();

    return (
        <>
            {error && <Text color={"red"}>{error}</Text>}

            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </>
    );
};
