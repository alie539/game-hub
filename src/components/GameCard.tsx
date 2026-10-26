import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"3xl"}>{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
