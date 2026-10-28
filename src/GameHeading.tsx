import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "./App";

interface Props {
    gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Game`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
};
