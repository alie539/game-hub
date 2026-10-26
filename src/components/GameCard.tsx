import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import { CriticScore } from "./CriticScore";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatFormIconList
                        key={game.id}
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
