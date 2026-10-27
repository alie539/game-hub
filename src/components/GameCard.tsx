import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import { CriticScore } from "./CriticScore";
import getCropedImageUrl from "../services/image-url";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card overflow={"hidden"}>
            <Image src={getCropedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize="lg" noOfLines={2}>
                    {game.name}
                </Heading>
                <HStack justifyContent="space-between">
                    <PlatFormIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
